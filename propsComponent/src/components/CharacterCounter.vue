<template>
  <div class="counter">
    <p class="counter-text">
      Total de personajes: <strong>{{ total }}</strong>
    </p>
  </div>
</template>

<script setup>
const { total } = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<style>
.counter {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.counter-number {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--sky-blue);
  line-height: 1;
}

.counter-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--diamond);
}

.counter-text {
  margin-bottom: 0;
}
</style>
