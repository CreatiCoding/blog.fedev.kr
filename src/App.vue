<template>
  <div id="app">
    <router-view class="d-b main-header" name="MainHeader"></router-view>
    <router-view class="d-b main-container"></router-view>
    <router-view class="d-b main-footer" name="MainFooter"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {},
};
</script>

<style lang="scss">
@import "./style/common.scss";
@import "normalize-css";
</style>
<style lang="scss" scoped>
.main-header {
  height: 62px;
}
.main-container {
  min-height: calc(100vh - 100px);
}
</style>
