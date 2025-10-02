<script setup>
import { onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  image: String,
  stock: Boolean,
  description: String,
});

const emit = defineEmits(["add-to-cart", "show-detail"]);

function addToCart() {
  emit("add-to-cart", { id: props.id, name: props.name, price: props.price });
}

console.log(`Creado: ${props.name}`);
onMounted(() => console.log(`Montado: ${props.name}`));
onBeforeUnmount(() => console.log(`Destruido: ${props.name}`));
</script>

<template>
  <div class="card product-card">
    <img :src="image" :alt="name" class="card-img product-img" />
    <div class="card-body product-card-body">
      <h2 class="card-title">{{ name }}</h2>
      <p class="card-text">$ {{ price }}</p>
      <span v-if="price < 1000" class="oferta mb-4">Oferta especial</span>
      <div class="mt-auto">
        <button class="btn btn-dark mx-1" @click="addToCart" :disabled="!stock">
          Agregar al carrito
        </button>
        <button
          class="btn btn-outline-dark mx-1"
          @click="
            emit('show-detail', {
              id: props.id,
              name: props.name,
              price: props.price,
              image: props.image,
              stock: props.stock,
              description: props.description,
            })
          "
        >
          Ver detalle
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.product-card {
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.product-img {
  object-fit: cover;
  height: 200px;
}
.sin-stock {
  opacity: 0.5;
}
.oferta {
  color: red;
  font-weight: bold;
}
</style>
