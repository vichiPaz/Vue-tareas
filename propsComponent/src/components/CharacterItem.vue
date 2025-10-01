<template>
  <article class="card character-card">
    <div class="position-relative overflow-hidden character-image-wrapper">
      <img :src="foto" :alt="nombre" class="character-image card-img" />
    </div>
    <div class="character-content card-body">
      <h2 class="card-title character-title">{{ nombre }}</h2>
      <p class="card-text"><strong>Descripción:</strong> {{ descripcion }}</p>
      <p class="card-text"><strong>Ocupación:</strong> {{ ocupacion }}</p>
      <p class="card-text"><strong>Familia:</strong> {{ familia }}</p>
      <p class="card-text"><strong>Reino:</strong> {{ reino }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  nombre: String,
  descripcion: String,
  ocupacion: String,
  familia: String,
  reino: String,
  foto: String,
});
</script>

<style scoped>
.character-card {
  cursor: pointer;
}

.character-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.character-card:focus-within {
  outline: 3px solid var(--steel-blue);
  outline-offset: 2px;
}

.character-image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%;
  overflow: hidden;
  background-color: var(--border-color);
}

.character-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.character-card:hover .character-image {
  transform: scale(1.05);
}

.character-content {
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.character-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(
    135deg,
    var(--steel-blue) 0%,
    var(--blue-sapphire) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.3;
}

.character-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  flex: 1;
}

.character-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  border-top: 1px solid var(--border-color);
  padding-top: var(--spacing-md);
}

.character-detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--steel-blue);
}

.detail-value {
  font-size: 0.875rem;
  color: var(--text-primary);
  font-weight: 400;
}
</style>
