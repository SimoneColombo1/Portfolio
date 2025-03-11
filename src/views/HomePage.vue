<script>
import { ref, shallowRef, onMounted, onUnmounted } from "vue";
import AboutMe from "../components/HomePage/AboutMe.vue";
import MyProjects from "../components/HomePage/MyProjects.vue";
import MyContacts from "../components/HomePage/MyContacts.vue";

export default {
  components: { AboutMe, MyProjects, MyContacts },
  setup() {
    const sections = shallowRef([AboutMe, MyProjects, MyContacts]);
    const activeIndex = ref(0);
    const containerRef = ref(null);
    let isScrolling = false;

    const handleScroll = (event) => {
      if (isScrolling) return;
      isScrolling = true;

      if (event.deltaY > 0 && activeIndex.value < sections.value.length - 1) {
        activeIndex.value++;
      } else if (event.deltaY < 0 && activeIndex.value > 0) {
        activeIndex.value--;
      }

      scrollToSection(activeIndex.value);
      setTimeout(() => (isScrolling = false), 600);
    };

    const scrollToSection = (index) => {
      activeIndex.value = index;
    };

    onMounted(() => {
      window.addEventListener("wheel", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("wheel", handleScroll);
    });

    return { sections, activeIndex, containerRef, scrollToSection };
  },
};
</script>

<template>
  <section class="main-container" ref="containerRef">
    <section class="home-page-container">
      <Transition name="fade" mode="out-in">
        <component
          :is="sections[activeIndex]"
          :key="activeIndex"
          class="section"
        />
      </Transition>
    </section>

    <div class="nav-indicators">
      <span
        v-for="(_, index) in sections"
        :key="index"
        :class="{ 'active-dot': activeIndex === index }"
        @click="scrollToSection(index)"
      ></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-container {
  height: 92vh;
  overflow: hidden;
  scroll-snap-type: y mandatory;
  position: relative;
  max-width: 1400px;

  .section {
    height: 92vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

  .nav-indicators {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      width: 12px;
      height: 12px;
      background: #ccc;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s, transform 0.2s;
    }

    .active-dot {
      background: orange;
      transform: scale(1.4);
    }
  }
}
</style>
