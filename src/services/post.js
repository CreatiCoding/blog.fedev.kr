import Vue from "vue";

export default {
  getPost({ post_id }) {
    return Vue.service.getGraphQL(
      `{getPost(post_id:${post_id}){post_id title contents}}`
    );
  },
};
