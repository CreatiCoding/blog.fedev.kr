<template>
  <div>
    <MarginTag top="50px" />
    <div class="main-container">
      <ButtonTag :click="() => $router.push('/document/list')">
        <h1
          @mouseenter="(event) => (event.target.style.color = '#50aafb')"
          @mouseleave="(event) => (event.target.style.color = 'unset')"
        >Document 게시글</h1>
      </ButtonTag>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {
    MarginTag: () => import("../presentation/atoms/MarginTag"),
    ButtonTag: () => import("../presentation/atoms/ButtonTag")
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-container {
  // background: chocolate;
}
</style>
