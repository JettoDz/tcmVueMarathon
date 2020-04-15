<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <div v-if="posts.length === 0">Loadin'...</div>
    <div v-for="post in posts" :key="post.id">
      <BlogPost :Title="post.Title" :Description="post.Description"></BlogPost>
    </div>
  </div>
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import fakeAPI from "./data/fakeApiCall.js";
import logger from "./mixings/log.js";

export default {
  name: "App",
  data() {
    return {
      posts: []
    };
  },
  components: {
    BlogPost
  },
  mixings: [logger],
  async created() {
    this.posts = await fakeAPI.fetchData();
  }
};
</script> 

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
