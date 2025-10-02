import { createRouter, createWebHistory } from "vue-router";
import CartView from "../components/CartView.vue";
import ProductCatalog from "../components/ProductCatalog.vue";

const routes = [
  { path: "/", component: ProductCatalog },
  { path: "/cart", component: CartView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
