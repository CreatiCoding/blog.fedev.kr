<template>
  <div class="post-detail-page">
    <MarginAtom top="50px" />
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <div>
        {{ contents }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostDetailPage",
  components: {
    MarginAtom: () => import("../presentation/atoms/MarginAtom"),
  },
  data() {
    const state = {
      title: "",
      contents: "",
      created: "",
    };
    return {
      state,
    };
  },
  computed: {
    // computed from state
    // prettier-ignore
    ...((l) => l.reduce((a, k) => ({
      ...a, [k]: {
        get() { return this.state[k]; },
        set(v) { this.state[k] = v; },
      },
    }),{}))([ 'title', 'contents', 'created_at' ]),
    post_id() {
      const { params } = this.$route;
      return params.id || 0;
    },
  },
  async created() {
    const { data } = await this.$service.Post.getPost({
      post_id: this.post_id,
    });
    const { title, contents } = data.data;
    this.title = title;
    this.contents = contents;
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.post-detail-page {
  // background: salmon;
  width: 1024px;
  margin: 0 auto;
}
</style>
