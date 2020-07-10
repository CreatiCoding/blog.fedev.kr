<template>
  <div id="app">
    <router-view class="d-b main-header" name="MainHeader"></router-view>
    <router-view class="d-b main-container"></router-view>
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
    AlertModal: () => import("./modals/AlertModal")
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
</style>
<style lang="scss" scoped>
.main-header {
  height: 62px;
}
.main-container {
  min-height: calc(100vh - 100px);
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
