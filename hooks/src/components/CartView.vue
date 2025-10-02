<script setup>
const props = defineProps({
  cart: Array,
});
</script>

<template>
  <div class="container mt-5">
    <h2>Carrito de Compras</h2>
    <ul class="list-group">
      <li
        v-for="(p, i) in cart"
        :key="i"
        class="list-group-item d-flex justify-content-between"
      >
        <span>{{ p.name }} - ${{ p.price }}</span>
      </li>
    </ul>
    <p v-if="!cart.length" class="text-muted mt-3">El carrito está vacío</p>
  </div>
</template>
