<template>
  <div></div>
</template>
<script>
export default {
  name: "PostEditorPage",
  data() {
    return {
      contents: { value: "" },
    };
  },
  created() {},
  async mounted() {
    this.openFile({ el: this.contents });
  },
  methods: {
    async openFile({ el }) {
      this.$stackedit.openFile({ el });
      this.$stackedit.onClose(() => {
        if (window.history.length <= 1) {
          this.$router.replace("/document/list");
          return;
        }
        this.$router.go(-1);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
