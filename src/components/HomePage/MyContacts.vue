<script setup>
const contacts = [
  {
    name: "e-mail",
    logo: "mail",
    content: "simcolombo2@gmail.com",
  },
  {
    name: "telephone",
    logo: "telephone",
    content: "+39 3246270421",
  },
  {
    name: "linkedin",
    logo: "linkedin",
    content: "https://www.linkedin.com/in/simone-colombo-a65a02325/",
  },
];
</script>

<template>
  <section class="MyContacts">
    <section class="content">
      <div>
        <h2>
          Hai bisogno di un front-end/backend web developer? Contattami pure qui
          ->
        </h2>
        <ul>
          <li v-for="contact in contacts" :key="contact.name">
            <span v-if="contact.name == 'linkedin'">
              {{ contact.logo }}
              <a :href="contact.content">
                {{ contact.content }}
              </a>
            </span>
            <span v-else> {{ contact.logo }} {{ contact.content }} </span>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.MyContacts {
  width: 100%;
  height: 100%;

  .content {
    color: white;
    font-size: 1.8rem;
    div {
      ul {
        list-style: none;
      }
    }
  }
}
</style>
