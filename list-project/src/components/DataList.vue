<script setup>
import { ref } from "vue";

const personajes = ref([
  { id: 1, nombre: "pikachu", descripcion: "Pokémon eléctrico" },
  { id: 2, nombre: "kakuna", descripcion: "Capullo resistente" },
  { id: 3, nombre: "beedrill", descripcion: "Abeja venenosa" },
  { id: 4, nombre: "metapod", descripcion: "Capullo verde" },
  { id: 5, nombre: "rattata", descripcion: "Ratón veloz" },
]);
</script>

<template>
  <div class="main">
    <h1>Lista de personajes</h1>
    <div class="characterList">
      <ul>
        <li v-for="p in personajes" :key="p.id">
          <strong>{{ p.nombre }}</strong
          >: {{ p.descripcion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  padding-top: 15%;
}

.characterList {
  padding: 0 35%;
}
</style>
