<script setup>
import { computed, defineProps, onMounted } from "vue";
import { usePokedex } from "../composables/usePokedex.js";

const props = defineProps({ search: { type: String, default: "" } });
const {
  list,
  loading,
  error,
  details,
  loadList,
  ensureDetails,
  show,
  hide,
  isExpanded,
} = usePokedex();

onMounted(() => loadList(151, 0));

const filtered = computed(() => {
  const q = (props.search ?? "").toLowerCase().trim();
  if (!q) return list.value;
  return list.value.filter((p) => p.name.toLowerCase().includes(q));
});

async function open(id) {
  await ensureDetails(id);
  show(id);
}
</script>

<template>
  <div class="container py-3">
    <div v-if="loading" class="text-center py-5 custom-text">
      Cargando pokémon…
    </div>
    <div v-else-if="error" class="alert alert-warning">{{ error }}</div>

    <div class="row g-3">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="p in filtered"
        :key="p.id"
      >
        <div class="card custom-card h-100">
          <img :src="p.imageUrl" class="card-img-top" :alt="p.name" />
          <div class="card-body">
            <h5 class="card-title text-capitalize">{{ p.name }}</h5>

            <button
              class="btn btn-sm btn-outline-success"
              v-if="!isExpanded(p.id)"
              @click="open(p.id)"
            >
              Mostrar detalles
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              v-else
              @click="hide(p.id)"
            >
              Ocultar detalles
            </button>
            <transition name="fade">
              <div v-if="isExpanded(p.id) && details.get(p.id)" class="pt-2">
                <small class="text-muted">{{ details.get(p.id).flavor }}</small
                ><br />
                <small
                  >Altura: {{ details.get(p.id).heightM }} m · Peso:
                  {{ details.get(p.id).weightKg }} kg</small
                ><br />
                <small>Tipo: {{ details.get(p.id).types.join(", ") }}</small
                ><br />
                <small
                  >Habilidades:
                  {{ details.get(p.id).abilities.join(", ") }}</small
                >
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
