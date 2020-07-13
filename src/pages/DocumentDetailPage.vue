<template>
  <div class="document-detail-page">
    <MarginAtom top="50px" />
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <div v-html="contents" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentDetailPage",
  components: {
    MarginAtom: () => import("../presentation/atoms/MarginAtom")
  },
  data() {
    const state = {
      title: "",
      contents: "",
      html: "",
      created: ""
    };
    return {
      state
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
    }),{}))([ 'title', 'contents', 'created_at', 'html' ]),
    document_id() {
      const { params } = this.$route;
      return params.id || 0;
    }
  },
  async created() {
    const { data } = await this.$service.Document.getDocumentDetail({
      document_id: this.document_id,
      category: "tech"
    });
    const { document } = data.data;
    this.title = document.title;

    const converter = new this.$showdown.Converter();
    this.contents = converter.makeHtml(document.contents);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.document-detail-page {
  // background: salmon;
  width: 1024px;
  margin: 0 auto;
}
</style>
