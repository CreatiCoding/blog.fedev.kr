<template>
  <div>
    <div style="display: inherit;">{{name}}</div>
    <div v-if="show_semi_colon">:</div>
  </div>
</template>
<script>
export default {
  name: "LabelTag",
  components: {},
  data() {
    return {};
  },
  props: {
    name: { type: String, default: "" },
    show_semi_colon: { type: Boolean, default: false }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>