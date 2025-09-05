<template>
  <section class="container text-center custom-section">
    <h3 class="">Selecciona un día de la semana</h3>

    <div class="w-sm-25 col custom-select__wrap">
      <label class="label p-3">De Lunes a Domingo</label>
      <div>
        <select
          class="form-select form-select-lg mb-3"
          :value="dia"
          @change="$emit('update:dia', $event.target.value)"
        >
          <option disabled value="">Selecciona un día...</option>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["dia"]);
const emit = defineEmits(["update:dia"]);
</script>

<style>
@media (min-width: 768px) {
  .custom-select__wrap {
    padding: 0 5rem;
  }
}
</style>
