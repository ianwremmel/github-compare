<template>
  <dl class="form-group">
    <dt><label :for="id"><slot name="label">{{ placeholder }}</slot></label></dt>
    <dd>
      <slot name="input">
        <input
          :id="id"
          class="form-control"
          :placeholder="placeholder"
          v-bind="$attrs"
          :value="value"
          @input="onInput"
        >
      </slot>
    </dd>
  </dl>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      required: true,
      type: String
    },
    placeholder: {
      required: true,
      type: String
    },
    value: {
      default: '',
      type: String
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
