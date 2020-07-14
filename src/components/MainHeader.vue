<template>
  <div class="main-header-container o-h">
    <div class="f-l left">
      <ButtonTag class="logo">
        <img
          style="max-width: 100%; width: auto;"
          v-lazy="'https://img.icons8.com/android/24/000000/menu.png'"
        />
      </ButtonTag>
      <span>{{ title }}</span>
    </div>
    <!-- <div class="f-l center">C</div> -->
    <!-- <div class="f-r right">R</div> -->
  </div>
</template>
<script>
export default {
  name: "MainHeader",
  components: {
    ButtonTag: () => import("./../presentation/atoms/ButtonTag")
  },
  props: {
    title: { type: String, default: "Creco" }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-header-container {
  // background: skyblue;
  border-bottom: 1px solid #c8c8c8;
  height: 62px;
  .left {
    .logo {
      float: left;
      // width height 이미지 고정시킬 수 있는 컴포넌트 필요
      height: 62px;
      width: 62px;
      img {
        margin: calc((62px - 24px) / 2);
      }
    }
    span {
      color: #50aafb;
      font-size: 2rem;
      display: inline-block;
      font-weight: bold;
      line-height: 62px;
      padding-left: 1rem;
      padding-top: 2px;
    }
  }
}
</style>
