<template>
  <div>
    <h2 v-text="Title"></h2>
    <p v-if="isOpen">{{ Description }}</p>
    <p v-else>{{ snippets }}</p>
    <button @click="changeState">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    Title: String,
    Description: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    snippets() {
      const snippets = this.Description.substring(0, 124);

      return `${snippets}...`;
    },
    buttonText() {
      return this.isOpen ? "Show more" : "Show less";
    }
  },
  methods: {
    changeState() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
</style>