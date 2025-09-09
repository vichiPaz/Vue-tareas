<script setup>
import { computed, defineProps, onMounted, reactive, ref, watch } from "vue";

const props = defineProps({
  search: { type: String, default: "" },
});
const emitPokemonSelected = defineEmits(["pokemon-selected"]);
const selectPokemon = (id, name) => {
  emitPokemonSelected("pokemon-selected", id, name);
};
const pokemonList = ref([]);
const loading = ref(false);
const loadError = ref("");
const expanded = reactive(new Set());
const isExpanded = (id) => expanded.has(id);

async function showDetails(id) {
  if (!detailsCache.has(id)) {
    await getPokemonDetails(id);
  }
  expanded.add(id);
}
function hideDetails(id) {
  expanded.delete(id);
}

async function loadPokemonList(limit = 151, offset = 0) {
  loading.value = true;
  loadError.value = "";
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    pokemonList.value = (data.results || []).map((item) => {
      const parts = item.url.split("/").filter(Boolean);
      const id = parts[parts.length - 1];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id: Number(id), name: item.name, description: "", imageUrl };
    });
  } catch (err) {
    loadError.value =
      "No se pudo cargar la lista desde PokeAPI. Intenta nuevamente.";
    console.error(err);
  } finally {
    loading.value = false;
  }
}

const filteredPokemon = computed(() => {
  const term = (props.search || "").toLowerCase().trim();
  if (!term) return pokemonList.value;
  return pokemonList.value.filter((p) => {
    const name = (p.name || "").toLowerCase();
    const desc = (p.description || "").toLowerCase();
    return name.includes(term) || desc.includes(term);
  });
});

watch(filteredPokemon, (newVal) => {
  if (newVal.length === 0) {
    emitPokemonSelected("no-results");
  }
});

onMounted(() => {
  loadPokemonList(151, 0);
});

const detailsCache = reactive(new Map());

async function getPokemonDetails(id) {
  if (detailsCache.has(id)) return detailsCache.get(id);

  const [pokemonRes, speciesRes] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
  ]);
  const [pokemon, species] = [await pokemonRes.json(), await speciesRes.json()];

  const info = {
    types: pokemon.types.map((t) => t.type.name),
    heightM: (pokemon.height / 10).toFixed(1),
    weightKg: (pokemon.weight / 10).toFixed(1),
    abilities: pokemon.abilities.map((a) => a.ability.name),
    stats: Object.fromEntries(
      pokemon.stats.map((s) => [s.stat.name, s.base_stat])
    ),
    flavor:
      (
        species.flavor_text_entries.find((f) => f.language.name === "es") ??
        species.flavor_text_entries.find((f) => f.language.name === "es")
      )?.flavor_text?.replace(/\f/g, " ") || "",
    color: species.color?.name,
    evolutionChainUrl: species.evolution_chain?.url,
  };

  detailsCache.set(id, info);
  return info;
}

async function loadDetails(id) {
  await getPokemonDetails(id);
}
</script>

<template>
  <div class="container py-3">
    <div v-if="loading" class="text-center py-5 custom-text">
      Cargando pokémon…
    </div>
    <div v-else-if="loadError" class="alert alert-warning">{{ loadError }}</div>
    <div class="row g-3">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="pokemon in filteredPokemon"
        :key="pokemon.id"
      >
        <div class="card custom-card h-100">
          <img
            :src="pokemon.imageUrl"
            class="card-img-top"
            :alt="pokemon.name"
          />
          <div class="card-body">
            <h5 class="card-title text-capitalize">{{ pokemon.name }}</h5>
            <p class="card-text" v-if="detailsCache.get(pokemon.id)"></p>

            <button
              class="btn btn-sm btn-outline-success"
              v-if="!isExpanded(pokemon.id)"
              @click="showDetails(pokemon.id)"
            >
              Mostrar Detalles
            </button>
            <button
              class="btn btn-sm btn-outline-secondary"
              v-else
              @click="hideDetails(pokemon.id)"
            >
              Ocultar Detalles
            </button>

            <div
              v-if="isExpanded(pokemon.id) && detailsCache.get(pokemon.id)"
              class="pt-2"
            >
              <small class="text-muted">{{
                detailsCache.get(pokemon.id).flavor
              }}</small>
<br></br>
              <small class="pt-2">
                Altura: {{ detailsCache.get(pokemon.id).heightM }} m · Peso:
                {{ detailsCache.get(pokemon.id).weightKg }} kg
              </small>
              <br></br>
              <small
                >Tipo:
                {{ detailsCache.get(pokemon.id).types.join(", ") }}</small
              >
              <br></br>
              <small>
                Habilidades:
                {{ detailsCache.get(pokemon.id).abilities.join(", ") }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-text {
  color: rgba(12, 47, 1, 0.2);
}

.custom-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 20px rgba(12, 47, 1, 0.2);
}
</style>
