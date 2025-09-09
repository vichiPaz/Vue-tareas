<script setup>
import { defineEmits, defineProps } from "vue";
const props = defineProps({
  modelValue: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue"]);
const onInput = (e) => emit("update:modelValue", e.target.value);
</script>

<template>
  <form class="d-flex" role="search">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Buscador..."
      aria-label="Search"
      :value="modelValue"
      @input="onInput"
    />
    <button class="btn btn-outline-success" type="button">Buscar</button>
  </form>
</template>
