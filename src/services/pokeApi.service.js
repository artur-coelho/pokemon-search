import http from "@/api";

export default {
  fetchAllPokemons: () => {
    return http.get(`pokemon?limit=${Number.MAX_SAFE_INTEGER}`);
  },
  fetchPokemonByName: (name) => {
    return http.get(`pokemon/${name}`);
  },
};
