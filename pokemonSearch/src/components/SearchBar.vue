<script setup>
import { defineEmits, defineProps, ref } from "vue";
const props = defineProps({
  modelValue: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue", "search"]);
const onInput = (e) => emit("update:modelValue", e.target.value);
const errorMsgSearch = ref("");

const handleSearch = () => {
  if (!props.modelValue || !props.modelValue.trim()) {
    errorMsgSearch.value = "Ingresa un nombre para buscar 👀";
    return;
  }
  errorMsgSearch.value = "";
  emit("search", props.modelValue.trim());
};
</script>

<template>
  <form class="d-flex" role="search" @submit.prevent="handleSearch">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Buscador..."
      aria-label="Search"
      :value="modelValue"
      @input="onInput"
    />
    <button class="btn btn-outline-success" type="submit">Buscar</button>
  </form>
  <div
    v-if="errorMsgSearch"
    class="text-danger small mt-1"
    role="alert"
    aria-live="polite"
  >
    {{ errorMsgSearch }}
  </div>
</template>
