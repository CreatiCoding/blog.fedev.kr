<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :post_id="post_id" :title="title" :contents="contents" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HelloWorld: () => import("./components/HelloWorld"),
  },
  data() {
    return {
      post_id: 0,
      title: "",
      contents: "",
    };
  },
  async created() {
    const { data } = await this.$service.post.getPost({ post_id: 1 });
    const { getPost } = data.data;
    const { title, contents, post_id } = getPost;
    this.title = title;
    this.contents = contents;
    this.post_id = post_id;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
