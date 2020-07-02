<template>
  <div
    :style="{
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      width: width,
      height: height,
    }"
  ></div>
</template>
<script>
export default {
  name: "MarginAtom",
  props: {
    top: { type: String, default: "auto" },
    right: { type: String, default: "auto" },
    bottom: { type: String, default: "auto" },
    left: { type: String, default: "auto" },

    width: { type: String, default: "auto" },
    height: { type: String, default: "auto" },
  },
};
</script>
<style lang="scss" scoped></style>
