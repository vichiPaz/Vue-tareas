import { reactive, ref } from "vue";

const list = ref([]);
const loading = ref(false);
const error = ref("");
const details = reactive(new Map());
const expanded = reactive(new Set());

export function usePokedex() {
  async function loadList(limit = 151, offset = 0) {
    loading.value = true;
    error.value = "";
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();

      await new Promise((resolve) => setTimeout(resolve, 800));
      list.value = (data.results || []).map((it) => {
        const id = Number(it.url.split("/").filter(Boolean).at(-1));
        return {
          id,
          name: it.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          description: it.description,
        };
      });
    } catch (e) {
      error.value = "No se pudo cargar PokeAPI.";
    } finally {
      loading.value = false;
    }
  }

  async function ensureDetails(id) {
    if (details.has(id)) return details.get(id);
    const [p, s] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json()),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((r) =>
        r.json()
      ),
    ]);
    const info = {
      types: p.types.map((t) => t.type.name),
      heightM: (p.height / 10).toFixed(1),
      weightKg: (p.weight / 10).toFixed(1),
      abilities: p.abilities.map((a) => a.ability.name),
      stats: Object.fromEntries(p.stats.map((s) => [s.stat.name, s.base_stat])),
      flavor:
        (
          s.flavor_text_entries.find((f) => f.language.name === "es") ??
          s.flavor_text_entries.find((f) => f.language.name === "es")
        )?.flavor_text?.replace(/\f/g, " ") || "",
    };
    details.set(id, info);
    return info;
  }

  function show(id) {
    expanded.add(id);
  }
  function hide(id) {
    expanded.delete(id);
  }
  const isExpanded = (id) => expanded.has(id);

  return {
    list,
    loading,
    error,
    details,
    loadList,
    ensureDetails,
    show,
    hide,
    isExpanded,
  };
}
