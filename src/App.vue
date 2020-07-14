<template>
  <div id="app">
    <router-view class="d-b main-header" name="MainHeader"></router-view>
    <MarginTag top="62px" />
    <router-view class="d-b main-container"></router-view>
    <MarginTag top="5rem" />
    <router-view class="d-b main-footer" name="MainFooter"></router-view>
    <div class="modal" v-if="Object.values(modal_list).filter(e=>e).length" @click="$modal.hideAll">
      <AlertModal v-if="modal_list.alert" :state="modal_list.alert" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    AlertModal: () => import("./modals/AlertModal"),
    MarginTag: () => import("./presentation/atoms/MarginTag")
  },
  data() {
    return {
      modal_list: this.$modal.getModals()
    };
  }
};
</script>

<style lang="scss">
@import "./style/common.scss";
@import "normalize-css";
.stackedit-container {
  margin-top: 62px;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
<style lang="scss" scoped>
.main-header {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 62px;
  background: white;
}
.main-container {
  min-height: calc(100vh - 100px);
  max-width: 1024px;
  margin: 0 auto;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
}
</style>
