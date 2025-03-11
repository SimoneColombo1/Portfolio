<script setup>
const Projects = [
  {
    id: 1,
    name: "PixelPortal",
    content:
      "Pixel Portal è un sito web per la visualizzazione e ricerca di video giochi",
    tecnologie: ["JavaScript", "NextJS", "HTML", "SCSS"],
  },
  {
    id: 2,
    name: "BoolChef",
    content: "Portale per cercare e contattare chef",
    tecnologie: ["JavaScript", "Vue", "Laravel", "PHP", "HTML", "SCSS"],
  },
  {
    id: 3,
    name: "Boolfolio",
    content:
      "Portfolio con progetti all interno passati da un api creata da me",
    tecnologie: ["JavaScript", "Vue", "Laravel", "PHP", "HTML", "SCSS"],
  },
  {
    id: 4,
    name: "BoolFlix",
    content:
      "Riproduzione di un sito di streaming ispirata a netflix con l'utilizzo dell'api di imbd",
    tecnologie: ["JavaScript", "Vue", "HTML", "SCSS"],
  },
  {
    id: 5,
    name: "BoolzApp",
    content: "Riproduzione dell'interfaccia di una WebApp ispirata a WhatsApp ",
    tecnologie: ["JavaScript", "HTML", "SCSS"],
  },
];
</script>

<template>
  <section class="main-container">
    <section class="content">
      <ul class="projects">
        <li v-for="project in Projects">
          <span>{{ project.name }}</span>
          <span>{{ project.content }}</span>
          <div class="technologies">
            <span v-for="technology in project.tecnologie"
              >{{ technology }}-</span
            >
          </div>
        </li>
      </ul>
    </section>
  </section>
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
