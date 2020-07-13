import Vue from "vue";

export default {
  getDocumentDetail({ document_id, category }) {
    return Vue.service.get(`/document/detail`, { document_id, category });
  },
  getDocumentList({ category, page_no = 1, page_size = 10 } = {}) {
    return Vue.service.get(`/document/list`, { category, page_no, page_size });
  },
};
