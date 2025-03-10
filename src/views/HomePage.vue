<script>
import { ref, shallowRef, onMounted, onUnmounted } from "vue";
import AboutMe from "../components/HomePage/AboutMe.vue";
import MyProjects from "../components/HomePage/MyProjects.vue";
import MyContacts from "../components/HomePage/MyContacts.vue";

export default {
  components: { AboutMe, MyProjects, MyContacts },
  setup() {
    const sections = shallowRef([AboutMe, MyProjects, MyContacts]);
    const sectionsRef = ref([]);
    const activeIndex = ref(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeIndex.value = sectionsRef.value.indexOf(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    onMounted(() => {
      sectionsRef.value.forEach((section) => {
        if (section) observer.observe(section);
      });
    });

    onUnmounted(() => {
      observer.disconnect();
    });

    return { sections, sectionsRef, activeIndex };
  },
};
</script>

<template>
  <section class="main-container">
    <section class="home-page-container">
      <div
        v-for="(Component, index) in sections"
        :key="index"
        ref="sectionsRef"
        class="section"
        :class="{ 'fade-in': activeIndex === index }"
      >
        <component :is="Component" />
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.home-page-container {
  display: flex;
  flex-direction: column;
  max-width: 1400px;
}

.section {
  height: 100vh;
  display: flex;
  width: 100%;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.section.fade-in {
  opacity: 1;
}
</style>
