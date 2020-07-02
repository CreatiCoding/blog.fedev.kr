<template>
  <div class="post-list-page">
    <MarginAtom top="50px" />
    <div><h1>게시글</h1></div>
    <div
      v-for="(post, index) in post_list"
      :key="`post_list-${index}-${post.post_id}`"
    >
      <ButtonAtom
        @mouseenter.native="
          (event) => (event.target.style.background = 'skyblue')
        "
        @mouseleave.native="
          (event) => (event.target.style.background = 'unset')
        "
        :click="() => $router.push(`/post/detail/${post.post_id}`)"
      >
        <div>{{ post.post_id }}</div>
        <div>{{ post.title }}</div>
        <div>{{ post.created_at }}</div>
      </ButtonAtom>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostListPage",
  components: {
    MarginAtom: () => import("../presentation/atoms/MarginAtom"),
    ButtonAtom: () => import("../presentation/atoms/ButtonAtom"),
  },
  data() {
    return {
      post_list: [],
    };
  },
  async created() {
    const { data } = await this.$service.Post.getPostList();
    const { post_list } = data.data;
    this.post_list = post_list;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.post-list-page {
  // background: salmon;
  width: 1024px;
  margin: 0 auto;
}
</style>
