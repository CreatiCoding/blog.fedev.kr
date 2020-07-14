<template>
  <div class="document-detail-page">
    <MarginTag bottom="calc(62px + 1rem)" />
    <div class="title-container">
      <h1>{{ title }}</h1>
      <MarginTag bottom="2rem" />
    </div>
    <div>
      <div class="contents" v-html="contents" ref="contents" />
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentDetailPage",
  components: {
    MarginTag: () => import("../presentation/atoms/MarginTag")
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
    const contents = converter
      .makeHtml(document.contents)
      .replace(/<img src=/g, "<img class='load-yet' data-src=");
    this.contents = contents;
    await Promise.resolve();
    await this.$nextTick();
    this.$refs.contents.querySelectorAll(".load-yet").forEach(async element => {
      element.src = element.dataset.src;
      await new Promise(resolve => setTimeout(() => resolve(true), 300));
      element.className = "load-done";
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.document-detail-page {
  // background: salmon;
  .title-container {
    margin-left: 20px;
    margin-right: 20px;

    h1 {
      display: inline;
      border-bottom: solid 1rem;
      border-color: #50aafb;
      line-height: 3.75rem;
      font-size: 2.25rem;
    }
  }
  .contents {
    word-break: break-word;
    ::v-deep > * {
      margin: 1rem;
    }
    ::v-deep > h2 {
      margin-top: 3rem;
    }
    ::v-deep img {
      &.load-yet {
        max-height: 0px;
        transition: max-height 0.15s ease-in;
        display: block;
        overflow: hidden;
      }
      &.load-done {
        max-height: 500px;
        transition: max-height 0.2s ease-out;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
