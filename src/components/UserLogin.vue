<script setup>
import { ref } from "vue";
const emit = defineEmits(["submitted", "cleared"]);
const name = ref("");
const age = ref("");
const email = ref("");

function clearForm() {
  name.value = "";
  age.value = "";
  email.value = "";
  emit("cleared");
}

function handleSubmit() {
  emit("submitted", name.value, age.value, email.value);
  name.value = "";
  age.value = "";
  email.value = "";
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label class="form-label">Nombre</label>
      <input type="text" v-model="name" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Edad</label>
      <input
        type="number"
        required
        v-model.lazy="age"
        class="form-control"
        min="1"
        step="1"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input type="email" required v-model.lazy="email" class="form-control" />
    </div>
    <div id="emailHelp" class="form-text pb-4">
      Nunca compartiremos tus datos con terceros.
    </div>

    <div>
      <button
        type="button"
        class="btn btn-outline-secondary mx-2"
        @click="clearForm"
      >
        Limpiar
      </button>
      <button type="submit" class="btn btn-dark mx-2">Registrar</button>
    </div>
  </form>
</template>

<style scoped></style>
