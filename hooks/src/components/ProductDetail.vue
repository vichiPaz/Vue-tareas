<script setup>
const props = defineProps({
  product: Object,
  closeHandler: Function,
});
</script>

<template>
  <div class="modal d-block show fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ product.name }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="props.closeHandler"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="product.image" class="img-thumbnail" />
          <p>{{ product.description }}</p>
          <p>Precio: {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  /* display: block; */
  background: rgba(0, 0, 0, 0.5);
}
</style>
