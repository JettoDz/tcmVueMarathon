<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <div v-for="post in posts" :key="post.id">
      <BlogPost :Title="post.Title" :Description="post.Description"></BlogPost>
    </div>
  </div>
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
export default {
  name: "App",
  data() {
    return {
      posts: [
        {
          id: 1,
          Title: "My blog title",
          Description: "Description"
        },
        {
          id: 2,
          Title: "My blog title2",
          Description: "Description"
        }
      ]
    };
  },
  components: {
    BlogPost
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
