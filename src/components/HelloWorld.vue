<template>
  <div class="hello">
    <h3>{{ post_id }}</h3>
    <h1>{{ title }}</h1>
    <h2>{{ contents }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    post_id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    contents: { type: String, default: "" },
  },
};
</script>
<style scoped></style>
