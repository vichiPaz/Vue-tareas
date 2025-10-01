<template>
  <header class="header">
    <div class="container">
      <h1 class="title">Game of Thrones</h1>
      <p class="subtitle">
        Conoce a los personajes más importantes de Westeros.
      </p>
    </div>
    <CharacterCounter :total="total" />
  </header>
</template>

<script setup>
import CharacterCounter from "./CharacterCounter.vue";

const { total } = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<style>
.header {
  background: linear-gradient(
    135deg,
    var(--maastricht-blue) 0%,
    var(--police-blue) 100%
  );
  color: var(--warm-white);
  padding: var(--spacing-2xl) 0;
  text-align: center;
}

.title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.02em;
  background: linear-gradient(
    135deg,
    var(--warm-white) 0%,
    var(--diamond) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  color: var(--diamond);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
