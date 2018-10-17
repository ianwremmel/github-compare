<template>
  <div class="container-fluid">
    <div class="row">
      <form class="col">
        <div class="form-group">
          <label for="from-org-name">Org or Username</label>
          <input class="form-control org-name" id="from-org-name" placeholder="Org or Username" v-model="fromOrgName">
        </div>
        <div class="form-group">
          <label for="from-repo-name">Repository</label>
          <input class="form-control repo-name" id="from-repo-name" placeholder="Repo" v-model="fromRepoName">
        </div>
        <div class="form-group">
          <label for="from-ref">From Ref</label>
          <input class="form-control tag" id="from-ref" placeholder="From Ref" v-model="fromRef">
        </div>
      </form>
      <form class="col">
        <div class="form-group">
          <label for="to-ref">To Ref</label>
          <input class="form-control tag" id="to-ref" placeholder="To Ref" v-model="toRef">
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Your compare url</h5>
            <p class="card-text"><a :href="compareUrl">{{compareUrl}}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    compareUrl() {
      if (this.fromOrgName === this.forkOwner || !this.forkOwner) {
        return `https://github.com/${this.fromOrgName}/${this.fromRepoName}/compare/${this.fromRef}...${this.toRef}`
      }
      else {
        return `https://github.com/${this.fromOrgName}/${this.fromRepoName}/compare/${this.fromRef}...${this.forkOwner}:${this.toRef}`
      }
    }
  },
  data() {
    return {
      fromOrgName: '',
      fromRepoName: '',
      fromRef: '',
      forkOwner: '',
      toRef: '',
    };
  }
}
</script>

<style>
@import 'bootstrap';
</style>

<style scoped>
</style>

