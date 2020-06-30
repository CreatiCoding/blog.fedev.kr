import Vue from "vue";

export default {
  getPost({ post_id }) {
    return Vue.service.get(`/post/detail`, { post_id });
  },
};
