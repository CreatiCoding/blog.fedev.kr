<template>
  <div>
    <LabelTag class="d-ib label" :name="name" />
    <InputTag class="d-ib" :type="type" :value="value" @input="e=>$emit('input', e)"></InputTag>
  </div>
</template>
<script>
export default {
  name: "LabelInput",
  components: {
    LabelTag: () => import("../atoms/LabelTag"),
    InputTag: () => import("../atoms/InputTag")
  },
  props: {
    name: { type: String, default: "" },
    type: { type: String, default: "text" },
    value: { type: String, default: "" }
  },
  created() {},
  methods: {
    input(ee) {
      console.log(ee);
    }
  }
};
</script>
<style lang="scss" scoped>
.label {
  min-width: 30px;
}
</style>