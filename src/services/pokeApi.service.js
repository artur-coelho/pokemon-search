import http from "@/api";

export default {
  fetchAllPokemons: () => {
    return http.get(`pokemon?limit=${Number.MAX_SAFE_INTEGER}`);
  },
  fetchPokemonByName: (name) => {
    return http.get(`pokemon/${name}`);
  },
  fetchPokemonSpecieByName: (name) => {
    return http.get(`pokemon-species/${name}`);
  },
  fecthEvolutionChain: (url) => {
    return http.get(url);
  },
};
