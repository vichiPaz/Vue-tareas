<script setup>
import { ref } from "vue";
import RadioForm from "./components/Radio.vue";
import SelectForm from "./components/Select.vue";

const nivel = ref("");
const dia = ref("");
const isReady = ref("");
const resetForm = () => {
  nivel.value = "";
  dia.value = "";
  isReady.value = false;
};
</script>

<template>
  <header class="text-center custom-section__header">
    <h1>🐮 Formulario muy importante 🐸</h1>
  </header>
  <section class="text-center">
    <div v-show="!isReady">
      <RadioForm v-model:nivel="nivel" />

      <SelectForm v-model:dia="dia" />
    </div>
    <section
      class="container mt-5 text-center custom-section__resume"
      v-show="isReady"
    >
      <div>
        <p>
          Vas a estudiar <strong> {{ nivel }}</strong>
        </p>
        <p>
          Tu día favorito es el <strong>{{ dia || " " }}</strong>
        </p>
      </div>
    </section>
    <div class="custom-btn-group pb-5">
      <button
        class="btn btn-light m-2 w-50"
        @click="isReady = !isReady"
        v-show="!isReady"
      >
        Enviar
      </button>
      <button
        class="btn btn-outline-light m-2 w-50"
        @click="resetForm"
        v-show="isReady"
      >
        Reiniciar
      </button>
    </div>
  </section>
</template>

<style>
body {
  background-color: black;
  color: azure;
}

.custom-btn-group {
  padding: 3rem 35% 0 35%;
}

.custom-section__header {
  padding: 3rem 0 2rem 0;
  color: rgb(19, 234, 51);
  border-bottom: 1px solid rgb(19, 234, 51);
}

.custom-section {
  padding: 4rem;
  width: 55%;
  align-items: center;
}

.custom-section__resume {
  padding: 1rem 1rem;
  width: 55%;
  border: azure solid 1px;
  border-radius: 1rem;
  color: darkgray;
  font-size: 1.25rem;
  margin-bottom: 5rem;
}

@media (max-width: 1024px) {
  .custom-section__header {
    padding: 2rem 1rem 1rem 1rem;
  }

  .custom-section {
    padding: 1rem 4rem;
    width: 95%;
  }

  .custom-section__resume {
    padding: 1rem 1rem;
    width: 85%;
  }

  .custom-btn-group {
    padding: 0;
  }
}
</style>
