<script></script>

<template>
  <section class="MyProjects">
    <section class="content">
      <div><h2>Dai un'occhiata ai miei ultimi lavori</h2></div>

      <button>Scopri di più</button>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.MyProjects {
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    height: 70%;
    border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
    background-color: #272727;
    h2 {
      color: white;
      font-size: 2.5rem;
    }
    button {
      padding: 1.5rem 4.5rem;
      font-size: 2rem;
      margin-top: 2rem;
    }
  }
}
</style>
