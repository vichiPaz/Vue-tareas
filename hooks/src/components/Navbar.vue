<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  cart: Array,
});

const router = useRouter();
function goToCart() {
  router.push("/cart");
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark px-3 py-3">
    <a class="navbar-brand" href="/">Mi Tienda</a>
    <div>
      <a class="text-bg-dark text-decoration-none mx-3" href="/">Catálogo</a>
      <button class="btn btn-outline-light position-relative" @click="goToCart">
        <i class="bi bi-cart"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ cart.length }}
        </span>
      </button>
    </div>
  </nav>
</template>
