<template>
  <div>
    <div>
      <InputAtom type="text" :value="id" @input="val => id = val"></InputAtom>
      <InputAtom type="password" :value="password" @input="val => password = val"></InputAtom>
    </div>
    <div>
      <ButtonAtom :click="login">로그인</ButtonAtom>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  components: {
    InputAtom: () => import("../presentation/atoms/InputAtom"),
    ButtonAtom: () => import("../presentation/atoms/ButtonAtom")
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
        this.$storage.Auth.set("token", token);
      } catch (e) {
        const { data } = e.response;
        this.$modal.show("alert", { title: "알림", message: data.message });
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
