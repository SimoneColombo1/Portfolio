<script setup>
import { defineProps, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const projectId = route.params.id;

const Projects = [
  {
    ProjectId: 1,
    name: "PixelPortal",
    content:
      "Pixel Portal è un sito web per la visualizzazione e ricerca di video giochi",
    tecnologie: ["JavaScript", "NextJS", "HTML", "SCSS"],
  },
  {
    ProjectId: 2,
    name: "BoolChef",
    content: "Portale per cercare e contattare chef",
    tecnologie: ["JavaScript", "Vue", "Laravel", "PHP", "HTML", "SCSS"],
  },
  {
    ProjectId: 3,
    name: "Boolfolio",
    content:
      "Portfolio con progetti all'interno passati da un'API creata da me",
    tecnologie: ["JavaScript", "Vue", "Laravel", "PHP", "HTML", "SCSS"],
  },
  {
    ProjectId: 4,
    name: "BoolFlix",
    content:
      "Riproduzione di un sito di streaming ispirata a Netflix con l'uso dell'API di IMDB",
    tecnologie: ["JavaScript", "Vue", "HTML", "SCSS"],
  },
  {
    ProjectId: 5,
    name: "BoolzApp",
    content: "Riproduzione dell'interfaccia di una WebApp ispirata a WhatsApp",
    tecnologie: ["JavaScript", "HTML", "SCSS"],
  },
];

let project = Projects.find((p) => p.ProjectId === parseInt(projectId));

watch(
  () => route.params.id,
  (newId) => {
    project = Projects.find((p) => p.ProjectId === parseInt(newId));
  }
);
</script>
<template>
  <section class="main-container" v-if="project">
    <section class="content">
      <div class="projects">
        <span>{{ project.name }}</span>
        <span>{{ project.content }}</span>
        <div class="technologies">
          <span v-for="technology in project.tecnologie" :key="technology">
            {{ technology }} -
          </span>
        </div>
      </div>
    </section>
  </section>
  <section class="main-container" v-else>progetto non trovato</section>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  .content {
    max-width: 1400px;
    display: flex;
    padding: 4rem;
    .projects {
      list-style: none;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      li {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: gray;
        font-size: 1.4rem;
        margin: 1rem;
        height: 25rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>
