<template>
  <div>
    <h2 v-text="Title"></h2>
    <p v-if="isOpen">{{ Description }}</p>
    <p v-else>{{ snippets }}</p>
    <button @click.prevent="changeState">{{ buttonText }}</button>
  </div>
</template>

<script>
import logger from "../mixings/log.js";

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
  mixings: [logger],
  methods: {
    changeState() {
      this.logNow();
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
</style>