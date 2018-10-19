<template>
  <div class="Box">
    <div class="Box-header">
      <slot 
        name="header" 
        :title="title"
      >
        <h2 class="Box-title">
          {{ title }}
        </h2>
      </slot>
    </div>
    <div class="Box-body">
      <slot name="body" />
    </div>
    <div class="Box-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
.Box :empty {
  display: none;
}
</style>
