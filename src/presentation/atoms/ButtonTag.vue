<template>
  <div class="clickable" @click="clickHandler">
    <slot />
  </div>
</template>
<script>
export default {
  name: "ButtonTag",
  props: {
    click: { type: Function, default: () => {} }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    clickHandler(event) {
      this.click(event);
    }
  }
};
</script>
<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}
</style>
