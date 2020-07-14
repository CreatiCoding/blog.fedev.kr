<template>
  <div class="alert">
    <div class="title">{{state.title}}</div>
    <div class="message">{{state.message}}</div>
    <div v-for="(button, index) in button_list" :key="`AlertModal-button-${index}`">
      <ButtonTag :click="button.click" class="button">{{button.message}}</ButtonTag>
    </div>
  </div>
</template>
<script>
export default {
  name: "AlertModal",
  components: {
    ButtonTag: () => import("../presentation/atoms/ButtonTag")
  },
  props: {
    state: Object
  },
  computed: {
    button_list() {
      if (this.state.button_list && this.state.button_list.length) {
        return this.state.button_list;
      }
      return [
        {
          message: "확인",
          click: () => {
            this.$modal.hide("alert");
          }
        }
      ];
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.alert {
  min-width: 200px;
  max-width: 500px;
  min-height: 100px;
  background: white;
  position: absolute;
  padding: 20px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    text-align: center;
    font-size: 1.2rem;
    color: #50aafb;
  }
  .message {
    padding: 10px;
    white-space: pre;
  }
  .button {
    border: solid 1px;
    padding: 8px;
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 50px;
  }
}
</style>
