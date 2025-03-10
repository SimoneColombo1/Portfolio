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
  background: linear-gradient(45deg, #ac0ab3, #6a0dad, #3f0061);
}
</style>
