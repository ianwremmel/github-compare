<template>
  <div class="d-flex flex-column flex-row flex-items-center">
    <div class="col">
      <button type="button" @click="login">Login</button>
      <form>
        <FormInput
          id="from-org-name"
          v-model="fromOrgName"
          placeholder="Org or Username"
          required
          @input="onOrgChange"
        />
        <FormInput
          id="from-repo-name"
          v-model="fromRepoName"
          placeholder="Repository"
          required
        >
          <template slot="input" slot-scope="{id, placeholder, value}">
            <v-select :id="id" :placeholder="placeholder" :value="value"/>
          </template>
        </FormInput>
        <FormInput
          id="fork-owner"
          v-model="forkOwner"
          placeholder="Fork Owner"
        />
        <FormInput
          id="from-ref"
          v-model="fromRef"
          placeholder="From Ref"
          required
        />
        <FormInput
          id="to-ref"
          v-model="toRef"
          placeholder="To Ref"
          required
        />
      </form>

      <Box title="Your compare url">
        <template slot="body"><a :href="compareUrl">{{ compareUrl }}</a></template>
      </Box>

    </div>
  </div>
</template>

<script>
import url from 'url';
import {debounce} from 'lodash';
import Github from '@octokit/rest';
import FormInput from './components/form-input';
import Box from './components/box';
import VueSelect from 'vue-select';
/**
 * @param {Github} github
 * @param {string} orgOrUser
 */
async function getRepos(github, orgOrUser) {
  try {
    const userRepos = await github.repos.getForUser({
      username: orgOrUser,
      type: 'owner'
    });
    console.log(userRepos);
    return userRepos.data;
  } catch (err) {
    if (err.code !== 404) {
      throw err;
    }

    const orgRepos = await github.repos.getForOrg({
      org: orgOrUser,
      type: 'sources'
    });
    console.log(orgRepos);
    return orgRepos.data;
  }
}

const github = new Github();

const loginUrl = url.format({
  protocol: 'https',
  host: 'github.com',
  pathname: 'login/oauth/authorize',
  query: {
    client_id: '89062d8d218f080bb807',
    redirect_uri: window.location.href,
    scope: 'repo'
  }
});

console.log(loginUrl);

export default {
  name: 'App',
  components: {
    Box,
    FormInput,
    'v-select': VueSelect
  },
  data() {
    return {
      fromOrgName: '',
      fromRepoName: '',
      fromRef: '',
      forkOwner: '',
      toRef: '',
      repos: []
    };
  },
  computed: {
    compareUrl() {
      if (this.fromOrgName === this.forkOwner || !this.forkOwner) {
        return `https://github.com/${this.fromOrgName}/${
          this.fromRepoName
        }/compare/${this.fromRef}...${this.toRef}`;
      }
      return `https://github.com/${this.fromOrgName}/${
        this.fromRepoName
      }/compare/${this.fromRef}...${this.forkOwner}:${this.toRef}`;
    }
  },
  methods: {
    login() {
      window.location = loginUrl;
    },
    onOrgChange: debounce(async function onOrgChange(event) {
      try {
        const repos = await getRepos(github, this.fromOrgName);
        this.repos = repos.map((repo) => repo.name);
      } catch (err) {
        if (err.code !== 404) {
          console.error(err);
        }
      }
    }, 200)
  }
};
</script>

<style>
@import 'primer';
</style>

<style scoped>
</style>
