<script setup>
import { ref } from "vue";
import Card from "./components/Card.vue";
import SearchBar from "./components/SearchBar.vue";

const searchQuery = ref("");
const errorMsg = ref("");
</script>

<template>
  <header class="text-center custom-section__header">
    <h1>Pokédex 📒</h1>
  </header>
  <section class="container custom-searchBarWrapper">
    <SearchBar v-model="searchQuery" @update:modelValue="errorMsg = ''" />
  </section>
  <section class="container custom-main">
    <div v-show="errorMsg" class="alert alert-success mx-auto mt-2">
      {{ errorMsg }}
    </div>
    <section class="container text-center">
      <Card
        :search="searchQuery"
        @no-results="errorMsg = 'No se encontraron resultados 😢'"
      />
    </section>
  </section>

  <footer class="custom-footer text-center">🐸</footer>
</template>

<style>
body {
  background-color: rgb(223, 240, 223);
  color: azure;
}

html,
body {
  height: 100%;
  margin: 0;
}

.custom-main {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  flex: 1;
}

.custom-section__header {
  padding: 3rem 0 2rem 0;
  color: rgb(3, 50, 10);
  border-bottom: 1px solid rgb(3, 50, 10);
}

.custom-searchBarWrapper {
  padding: 1rem 15%;
}

.custom-footer {
  padding: 3rem;
  font-size: 2rem;
}

@media (max-width: 1024px) {
  .custom-section__header {
    padding: 2rem 1rem 1rem 1rem;
  }

  .custom-searchBarWrapper {
    padding: 1rem 5%;
  }
}
</style>
