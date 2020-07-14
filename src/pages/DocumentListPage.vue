<template>
  <div class="document-list-page">
    <MarginTag top="50px" />
    <div>
      <h1>게시글</h1>
    </div>
    <div
      v-for="(document, index) in document_list"
      :key="`document_list-${index}-${document.document_id}`"
    >
      <ButtonTag
        @mouseenter.native="
          (event) => (event.target.style.background = 'skyblue')
        "
        @mouseleave.native="
          (event) => (event.target.style.background = 'unset')
        "
        :click="() => $router.push(`/document/detail/${document.document_id}`)"
      >
        <div>{{ document.document_id }}</div>
        <div>{{ document.title }}</div>
        <div>{{ document.created_at }}</div>
      </ButtonTag>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocumentListPage",
  components: {
    MarginTag: () => import("../presentation/atoms/MarginTag"),
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
}
</style>
