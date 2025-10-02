<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

const emit = defineEmits(["show-detail", "add-to-cart"]);

const products = ref([
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    stock: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwOC6_XLG0gr4PCKqb1CzYd1SzD6yb39CkA&s",
    description: "Potente laptop.",
  },
  {
    id: 2,
    name: "Mouse",
    price: 500,
    stock: true,
    image:
      "https://hp.widen.net/content/niigf0ey4e/png/niigf0ey4e.png?w=800&h=600&dpi=72&color=ffffff00",
    description: "Mouse inalámbrico.",
  },
  {
    id: 3,
    name: "Teclado",
    price: 800,
    stock: false,
    image:
      "https://www.lofree.co/cdn/shop/files/Edge_grey_PI01_aa61e6da-02a1-419c-9f79-4dfd1da85980.webp?v=1719923279&width=2048",
    description: "Teclas super suaves.",
  },
  {
    id: 4,
    name: "Pantalla",
    price: 1100,
    stock: true,
    image:
      "https://5.imimg.com/data5/SI/JY/MY-19006554/resistive-touch-screen-monitor-500x500.jpg",
    description: "Pantalla HD.",
  },
]);

function handleCart(product) {
  console.log("Producto agregado al carrito:", product);
  emit("add-to-cart", product);
}

function showDetail(product) {
  emit("show-detail", product);
}
</script>

<template>
  <div>
    <h1 class="h1 m-5 text-center">Catálogo</h1>
    <div class="catalog-container">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        v-bind="p"
        @add-to-cart="handleCart"
        @show-detail="showDetail"
      >
      </ProductCard>
    </div>
  </div>
</template>

<style scoped>
.catalog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  padding: 2rem;
  justify-items: center;
  align-items: stretch;
}
</style>
