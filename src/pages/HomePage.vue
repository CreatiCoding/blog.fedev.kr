<template>
  <div>
    <MarginAtom top="50px" />
    <div class="main-container">
      <ButtonAtom :click="() => $router.push('/document/list')">
        <h1
          @mouseenter="(event) => (event.target.style.color = '#50aafb')"
          @mouseleave="(event) => (event.target.style.color = 'unset')"
        >Document 게시글</h1>
      </ButtonAtom>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  components: {
    MarginAtom: () => import("../presentation/atoms/MarginAtom"),
    ButtonAtom: () => import("../presentation/atoms/ButtonAtom")
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
  width: 1024px;
  margin: 0 auto;
}
</style>
