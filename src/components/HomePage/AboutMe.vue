<script></script>

<template>
  <section class="AboutMe">
    <section class="content">
      <div class="title"><h1>Chi sono</h1></div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ex
        beatae at quos nemo amet corrupti dicta quod error voluptatum dolorum
        vitae molestiae cum consectetur labore quaerat temporibus id, magnam
        nobis doloribus distinctio! Sint error quibusdam suscipit minus hic
        mollitia, earum quam, reprehenderit maiores delectus eum quaerat
        aliquid! Recusandae mollitia iste at? Ut esse molestias eos quisquam.
        Dolor illo placeat asperiores ipsam nulla non earum obcaecati porro
        ducimus nostrum corrupti eveniet, maiores nihil pariatur? Esse tenetur
        id nisi iusto eum beatae, a commodi neque culpa reiciendis. Est illum
        itaque maiores quidem nam, perferendis ad atque obcaecati rem dolorum
        quas sint.
      </span>
    </section>
  </section>
</template>
<style lang="scss" scoped>
.AboutMe {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    justify-content: center;
    align-items: start;
    height: 70%;
    display: flex;
    padding: 4rem;
    border-radius: 1rem;
    background-color: #272727;
    color: white;

    flex-direction: column;
    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      h1 {
        margin: 0;
        font-size: 2.5rem;
      }
    }
    font-size: 2rem;
  }
}
</style>
