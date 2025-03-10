<script>
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "",
  components: {
    AppHeader,
  },
};
</script>

<template>
  <main>
    <AppHeader />
    <RouterView />
  </main>
</template>

<style lang="scss"></style>
