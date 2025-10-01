<template>
  <section class="character-grid">
    <CharacterItem
      v-for="personaje in personajes"
      :key="personaje.id"
      :nombre="personaje.nombre"
      :descripcion="personaje.descripcion"
      :ocupacion="personaje.ocupacion"
      :familia="personaje.familia"
      :reino="personaje.reino"
      :foto="personaje.foto"
    />
  </section>
</template>

<script setup>
import CharacterItem from "./CharacterItem.vue";

const props = defineProps({
  personajes: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}
</style>
