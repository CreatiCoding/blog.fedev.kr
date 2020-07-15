<template>
  <div class="document-list-page">
    <div>
      <h1>게시글</h1>
    </div>
    <div
      v-for="(document, index) in document_list"
      :key="`document_list-${index}-${document.document_id}`"
    >
      <ButtonTag
        class="document-item"
        @mouseenter.native="
          (event) => (event.target.style.background = 'skyblue')
        "
        @mouseleave.native="
          (event) => (event.target.style.background = 'unset')
        "
        :click="() => $router.push(`/document/detail/${document.document_id}`)"
      >
        <!-- <div>{{ document.document_id }}</div> -->
        <h2 class="document-title">{{ document.title }}</h2>
        <div class="t-r">{{ document.created_at }}</div>
        <span class="document-contents">{{ document.contents.slice(0,100) }}</span>
      </ButtonTag>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentListPage",
  components: {
    ButtonTag: () => import("../presentation/atoms/ButtonTag")
  },
  data() {
    return {
      document_list: []
    };
  },
  async created() {
    const { data } = await this.$service.Document.getDocumentList({
      category: "tech"
    });
    const { document_list } = data.data;
    this.document_list = document_list;
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.document-list-page {
  // background: salmon;
  margin: 0 auto;
  .document-item {
    padding: 1rem;
    margin: 2rem 0;
    box-shadow: 2px 2px 8px #c8c8c8;
    .document-title {
      margin: 10px 0;
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      line-height: 120%;
      height: 120%;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .document-contents {
      margin: 10px 0;
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      line-height: 120%;
      height: 240%;
      text-align: left;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
