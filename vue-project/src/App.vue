<script setup>
import UserList from "./components/UserList.vue";
</script>

<template>
  <nav>
    <h1>Hola!</h1>
  </nav>
  <section>
    <UserList></UserList>
  </section>
  <footer>
    <h3>Muchas Gracias 🍟</h3>
  </footer>
</template>

<style>
body {
  background-color: black;
  color: azure;
}

nav {
  padding: 24px;
}

h1 {
  text-align: center;
}

section {
  padding: 24px;
}

footer {
  text-align: center;
  padding: auto;
}
</style>
