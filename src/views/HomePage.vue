<script>
import AboutMe from "../components/HomePage/AboutMe.vue";
import MyProjects from "../components/HomePage/MyProjects.vue";
import MyContacts from "../components/HomePage/MyContacts.vue";
export default {
  name: "",
  components: {
    AboutMe,
    MyProjects,
    MyContacts,
  },
};
</script>

<template>
  <section class="main-container">
    <section class="home-page-container">
      <AboutMe />
      <MyProjects />
      <MyContacts />
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
