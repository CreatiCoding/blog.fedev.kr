import Vue from "vue";

export default {
  getPost({ post_id }) {
    return Vue.service.get(`/post/detail`, { post_id });
  },
  getPostList({ page_no = 1, page_size = 10 } = {}) {
    return Vue.service.get(`/post/list`, { page_no, page_size });
  },
};
