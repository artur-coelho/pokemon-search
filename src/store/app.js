// Utilities
import { defineStore } from "pinia";
import { pokeApiService } from "@/services";

export const useAppStore = defineStore("app", {
  state: () => ({
    allPokemons: [],
    currentPokemons: [],
  }),
  actions: {
    fetchAllPokemons() {
      try {
        pokeApiService.fetchAllPokemons().then(({ data }) => {
          this.allPokemons = data;
          return Promise.resolve(data);
        });
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
  getters: {
    allPokemonsGetter: (state) => state.allPokemons,
    currentPokemonsGetter: (state) => state.currentPokemons,
  },
});
