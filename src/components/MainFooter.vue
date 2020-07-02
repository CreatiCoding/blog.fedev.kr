<template>
  <div class="main-footer-container t-c">@copyright {{ author }}</div>
</template>
<script>
export default {
  name: "MainFooter",
  components: {},
  data() {
    return {};
  },
  props: {
    author: { type: String, default: "CreatiCoding" },
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.main-footer-container {
  // background: orangered;
}
</style>
