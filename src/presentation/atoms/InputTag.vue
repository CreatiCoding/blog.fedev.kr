<template>
  <div>
    <input :type="type" @input="({target}) => $emit('input', target.value)" />
  </div>
</template>
<script>
export default {
  name: "InputTag",
  components: {},
  data() {
    return {};
  },
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: { type: String, default: "" },
    type: { type: String, default: "" }
  }
};
</script>
<style lang="scss" scoped></style>
