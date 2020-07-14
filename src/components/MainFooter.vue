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
    author: { type: String, default: "CreatiCoding" }
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-footer-container {
  background: #e0e0e0;
  height: 10rem;
  line-height: 10rem;
  padding-top: 2rem;
}
</style>
