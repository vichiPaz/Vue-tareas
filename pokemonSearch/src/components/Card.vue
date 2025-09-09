<script setup>
import { computed, defineProps, onMounted, ref, watch } from "vue";

const props = defineProps({
  search: { type: String, default: "" },
});

const emitPokemonSelected = defineEmits(["pokemon-selected"]);
const selectPokemon = (id, name) => {
  emitPokemonSelected("pokemon-selected", id, name);
};

const pokemonList = ref([]);
const seedPokemon = [
  { id: 1, name: "pikachu", description: "Pokémon eléctrico" },
  { id: 2, name: "kakuna", description: "Capullo resistente" },
  { id: 3, name: "beedrill", description: "Abeja venenosa" },
  { id: 4, name: "metapod", description: "Capullo verde" },
  { id: 5, name: "rattata", description: "Ratón veloz" },
  { id: 6, name: "charmander", description: "Lagartija de fuego" },
  { id: 7, name: "squirtle", description: "Tortuga de agua" },
  { id: 8, name: "bulbasaur", description: "Pokémon semilla" },
  { id: 9, name: "jigglypuff", description: "Canta hasta dormir" },
  { id: 10, name: "meowth", description: "Gato travieso" },
  { id: 11, name: "psyduck", description: "Pato confundido" },
  { id: 12, name: "snorlax", description: "Duerme todo el día" },
];

onMounted(async () => {
  pokemonList.value = await Promise.all(
    seedPokemon.map(async (p, idx) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${p.name}`
        );
        const data = await response.json();

        const imgHQ = data.sprites?.other?.["official-artwork"]?.front_default;

        const img = imgHQ ?? data.sprites?.front_default ?? "";
        return {
          id: data.id ?? idx + 1,
          name: data.name,
          description: p.description,
          imageUrl: img,
        };
      } catch {
        const id = idx + 1;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return {
          id,
          name: p.name,
          description: p.description,
          imageUrl: img,
        };
      }
    })
  );
});

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
</script>

<template>
  <div class="container py-3">
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
            <p class="card-text">{{ pokemon.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 20px rgba(12, 47, 1, 0.2);
}
</style>
