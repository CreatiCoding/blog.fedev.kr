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
  data() {
    return {
      post_id: 0,
      title: "",
      contents: ""
    };
  },
  computed: {
    q_post_id() {
      const { query = {} } = this.$route || {};
      return query.post_id || 1;
    }
  },
  async created() {
    try {
      const { data } = await this.$service.post.getPost({
        post_id: this.q_post_id
      });
      const { title, contents, post_id } = data.data;
      this.title = title;
      this.contents = contents;
      this.post_id = post_id;
      await this.$nextTick();
      document.querySelector(".hello").append(
        (() => {
          var d = document.createElement("div");
          d.setAttribute("id", "load-complete");
          d.setAttribute("style", "display: none;");
          return d;
        })()
      );
    } catch (e) {
      this.title = "404";
      this.contents = "해당 페이지가 없습니다.";
      this.post_id = null;
    }
  }
};
</script>
<style scoped></style>
