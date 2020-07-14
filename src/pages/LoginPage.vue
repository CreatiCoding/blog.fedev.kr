<template>
  <div>
    <MarginTag :top="'50px'" />
    <div
      class="d-ib"
      style="
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    "
    >
      <div>
        <LabelInput class="d-ib" name="ID" type="text" :value="id" @input="e => id = e" />
        <MarginTag :top="'30px'" />
        <LabelInput
          class="d-ib"
          name="PW"
          type="password"
          :value="password"
          @input="e => password = e"
        />
        <MarginTag :top="'30px'" />
      </div>
      <div style="background: skyblue;">
        <ButtonTag class="t-c" :click="login">
          <span class="d-ib" style="padding: 5px; color: white; font-weight: bold">로그인</span>
        </ButtonTag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  components: {
    LabelInput: () => import("../presentation/molecules/LabelInput"),
    ButtonTag: () => import("../presentation/atoms/ButtonTag"),
    MarginTag: () => import("../presentation/atoms/MarginTag")
  },
  data() {
    return {
      id: "",
      password: ""
    };
  },
  created() {},
  methods: {
    async login() {
      const { id, password } = this;
      try {
        const { data } = await this.$service.Auth.login({ id, password });
        const { token } = data;
        this.$cookie.User.set("token", token);
        this.$router.replace(this.$router.getNext());
      } catch (e) {
        console.error(e);
        const { data } = e.response;
        this.$modal.show("alert", { title: "알림", message: data.message });
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
