<template>
  <div class="d-flex flex-column flex-row flex-items-center">
    <div class="col">
      <form>
        <FormInput
          id="from-org-name"
          v-model="fromOrgName"
          placeholder="Org or Username"
          required
        />
        <FormInput
          id="from-repo-name"
          v-model="fromRepoName"
          placeholder="Repository"
          required
        />
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
import FormInput from './components/form-input';
import Box from './components/box';

export default {
  name: 'App',
  components: {
    Box,
    FormInput
  },
  data() {
    return {
      fromOrgName: '',
      fromRepoName: '',
      fromRef: '',
      forkOwner: '',
      toRef: ''
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
  }
};
</script>

<style>
@import 'primer';
</style>

<style scoped>
</style>
