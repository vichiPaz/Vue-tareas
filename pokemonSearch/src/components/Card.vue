<script setup>
import { computed, defineProps, onMounted, watch } from "vue";
import { usePokedex } from "../composables/usePokedex.js";

const props = defineProps({ search: { type: String, default: "" } });
const emit = defineEmits(["no-results", "has-results"]);
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

onMounted(async () => {
  await loadList(151, 0);
});

const filtered = computed(() => {
  const q = (props.search ?? "").toLowerCase().trim();
  if (!q) return list.value;
  return list.value.filter((p) => p.name.toLowerCase().includes(q));
});

watch(
  [filtered, () => props.search, loading],
  ([f, q, isLoading]) => {
    if (isLoading) return;
    const query = (q ?? "").trim();
    if (!query) return;
    if (Array.isArray(f) && f.length === 0) {
      emit("no-results");
    } else {
      emit("has-results");
    }
  },
  { immediate: true }
);

function pad3(n) {
  return String(n).padStart(3, "0");
}
async function toggle(p) {
  const id = p.id;
  if (!isExpanded(id)) {
    await ensureDetails(id);
    show(id);
  } else {
    hide(id);
  }
}

async function prefetch(id) {
  if (!details.get(id)) {
    ensureDetails(id);
  }
}

const typeColors = {
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  normal: "#A8A77A",
};
</script>

<template>
  <div class="container py-3">
    <div v-if="loading" class="text-center py-5 custom-text text-black">
      Cargando pokémon…
    </div>

    <div class="row g-3">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="p in filtered"
        :key="p.id"
      >
        <div
          class="flip-card"
          role="button"
          @click="toggle(p)"
          @mouseenter="prefetch(p.id)"
          :aria-pressed="isExpanded(p.id) ? 'true' : 'false'"
        >
          <div
            class="flip-card-inner"
            :class="{ 'is-flipped': isExpanded(p.id) }"
          >
            <!-- FRONT -->
            <div
              class="flip-card-front card custom-card p-3 d-flex flex-column align-items-center justify-content-between"
            >
              <div class="fw-bold fs-3">#{{ pad3(p.id) }}</div>
              <img
                :src="p.imageUrl"
                loading="lazy"
                class="card-img-top img-fluid my-2"
                :alt="p.name"
                style="max-height: 180px; object-fit: contain"
              />
              <h5 class="card-title text-capitalize text-center mt-2">
                {{ p.name }}
              </h5>
              <p
                v-if="details.get(p.id)"
                class="card-text text-muted small mb-2"
              >
                {{ (details.get(p.id).flavor || "").replace(/\n|\f/g, " ") }}
              </p>
              <span
                v-if="details.get(p.id)"
                :style="{
                  backgroundColor:
                    typeColors[details.get(p.id).types[0]] || '#777',
                }"
                class="badge type-badge text-capitalize mt-2"
              >
                {{ details.get(p.id).types[0] }}
              </span>
            </div>

            <!-- BACK -->
            <div class="flip-card-back card custom-card p-3">
              <div v-if="details.get(p.id)" class="poke-back">
                <h4 class="text-center">
                  #{{ pad3(p.id) }} - {{ p.name.toUpperCase() }}
                </h4>
                <div class="d-flex justify-content-center gap-3 my-2">
                  <div>
                    <strong>Altura:</strong> {{ details.get(p.id).heightM }}m
                  </div>
                  <div>
                    <strong>Peso:</strong> {{ details.get(p.id).weightKg }}kg
                  </div>
                </div>

                <h5 class="text-center mt-3">Habilidades:</h5>
                <div class="d-flex flex-wrap gap-2 justify-content-center mb-1">
                  <span
                    class="ability text-capitalize"
                    v-for="ab in details.get(p.id).abilities"
                    :key="ab"
                    >{{ ab }}</span
                  >
                </div>

                <h5 class="text-center mt-3">Estadísticas:</h5>
                <div class="stats">
                  <div
                    class="stat"
                    v-for="(val, key) in details.get(p.id).stats"
                    :key="key"
                  >
                    <span class="label text-sm-start"
                      >{{ key.toLowerCase().replace("special-", "sp.") }}:</span
                    >
                    <span class="bar"
                      ><span
                        class="fill"
                        :style="{ width: Math.min(val, 100) + '%' }"
                      ></span
                    ></span>
                    <span class="value">{{ val }}</span>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-5">Cargando detalles…</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.flip-card {
  perspective: 1000px;
  cursor: pointer;
  padding: 8px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}
.flip-card-inner.is-flipped {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 12px;
}
.flip-card-back {
  transform: rotateY(180deg);
}

.type-badge {
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.ability {
  background: #a6e82c;
  color: #032f0f;
  padding: 2px 6px;
  border-radius: 8px;
  font-weight: 600;
  font-size: small;
}

.stats {
  display: grid;
  gap: 8px;
  margin-top: 4px;
}
.stat {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 8px;
}
.stat .label {
  font-weight: 600;
  font-size: 12px;
}
.stat .bar {
  height: 10px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}
.stat .fill {
  display: block;
  height: 100%;
  background: #a6e82c;
}

.flip-card {
  height: 100%;
}
.flip-card-inner {
  min-height: 480px;
  max-height: 480px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flip-card-front,
.flip-card-back {
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
