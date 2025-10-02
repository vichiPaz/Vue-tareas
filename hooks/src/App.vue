<script setup>
import { ref } from "vue";

import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import ProductDetail from "./components/ProductDetail.vue";

const cart = ref([]);

function addToCart(product) {
  cart.value.push(product);
}

const selectedProduct = ref(null);

function handleShowDetail(product) {
  selectedProduct.value = product;
}

function closeModal() {
  selectedProduct.value = null;
}
</script>

<template>
  <Navbar :cart="cart" />

  <!-- Aquí se inyectan las páginas según la ruta -->
  <RouterView
    :cart="cart"
    @add-to-cart="addToCart"
    @show-detail="handleShowDetail"
  />

  <!-- Modal de detalle -->
  <ProductDetail
    v-if="selectedProduct"
    :product="selectedProduct"
    :close-handler="closeModal"
  />
</template>

<style scoped></style>
