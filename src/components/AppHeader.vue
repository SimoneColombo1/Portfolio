<script setup></script>

<template>
  <header>
    <section class="header-container">
      <span>Simone Colombo</span>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">I Miei Progetti</a></li>
        </ul>
      </nav>
    </section>
  </header>
</template>
<style lang="scss" scoped>
header {
  background-color: #272727;
  height: 8vh;
  display: flex;
  align-items: center;
  .header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;
    color: white;
    span {
      margin-left: 0;
    }
    nav {
      margin-right: 0;
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        li {
          &:first-child {
            margin-right: 1rem;
          }
          a {
            color: white;
            &:hover {
              opacity: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
