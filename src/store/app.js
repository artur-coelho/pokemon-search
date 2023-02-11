// Utilities
import { defineStore } from "pinia";
import { pokeApiService } from "@/services";

export const useAppStore = defineStore("app", {
  state: () => ({
    allPokemons: [],
    currentPokemons: [],
    searchedPokemon: null,
  }),
  actions: {
    fetchAllPokemons() {
      return new Promise((resolve, reject) => {
        pokeApiService
          .fetchAllPokemons()
          .then(({ data }) => {
            this.allPokemons = data.results;
            resolve(data.results);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchPokemonByName(payload) {
      return new Promise((resolve, reject) => {
        pokeApiService
          .fetchPokemonByName(payload)
          .then(({ data }) => {
            this.currentPokemons.push(data);
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fetchPokemonSpecieByName(payload) {
      return new Promise((resolve, reject) => {
        pokeApiService
          .fetchPokemonSpecieByName(payload)
          .then(({ data }) => {
            const evolutionChain = this.fecthEvolutionChain(
              data.evolution_chain.url
            );
            resolve(evolutionChain);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    fecthEvolutionChain(payload) {
      return new Promise((resolve, reject) => {
        pokeApiService
          .fecthEvolutionChain(payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    allPokemonsGetter: (state) => state.allPokemons,
    currentPokemonsGetter: (state) => state.currentPokemons,
    searchedPokemonGetter: (state) => state.searchedPokemon,
  },
});
