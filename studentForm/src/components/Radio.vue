<template>
  <section class="container mt-5 mb-2 text-center custom-section">
    <h3>¿Qué vas a estudiar?</h3>

    <div
      class="d-flex justify-content-center pt-2 row row-cols-2 row-cols-sm-4 px-3 px-lg-5"
    >
      <label class="check p-2 col">
        <input
          type="radio"
          value="Ninja"
          :checked="nivel === 'Ninja'"
          @change="$emit('update:nivel', 'Ninja')"
        />
        <span class="ps-2">Ninja</span>
      </label>

      <label class="check p-2 col">
        <input
          type="radio"
          value="Samurai"
          :checked="nivel === 'Samurai'"
          @change="$emit('update:nivel', 'Samurai')"
        />
        <span class="ps-2">Samurai</span>
      </label>

      <label class="check p-2 col">
        <input
          type="radio"
          value="Karate"
          :checked="nivel === 'Karate'"
          @change="$emit('update:nivel', 'Karate')"
        />
        <span class="ps-2">Karate</span>
      </label>

      <label class="check p-2 col">
        <input
          type="radio"
          value="Judo"
          :checked="nivel === 'Judo'"
          @change="$emit('update:nivel', 'Judo')"
        />
        <span class="ps-2">Judo</span>
      </label>
    </div>
  </section>
</template>

<script setup>
defineProps(["nivel"]);
defineEmits(["update:nivel"]);
</script>
