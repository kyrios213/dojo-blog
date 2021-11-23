<template>
  <div class="home">
    <h1>Home 2</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Home2",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return {
      posts,
      error,
    };
  },
};
</script>

<style></style>
