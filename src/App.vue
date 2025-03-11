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

<style lang="scss">
.main-container {
  background-image: url("./images/background.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>
