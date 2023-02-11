<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <v-img contain height="200" src="@/assets/images/Poké_Ball_icon.svg" class="mt-16" />

      <h1 class="text-h2 font-weight-bold">Pokémon Search</h1>

      <v-row class="d-flex align-center justify-center mt-16">
        <pokemon-input @onSearch="serchPokemonByName" />
      </v-row>
      {{ currentPokemons.length }}
    </v-responsive>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'
import PokemonInput from './forms/PokemonInput.vue';

const store = useAppStore();

const currentPokemons = computed(() => store.currentPokemonsGetter)

const serchPokemonByName = (name) => {
  store.$patch(
    { currentPokemons: [], }
  )
  store.fetchPokemonSpecieByName(name).then((test) => {
    recursivePokemonChain(test.chain)
  })
}

const recursivePokemonChain = (chain) => {
  store.fetchPokemonByName(chain.species.name)
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach(element => {
      recursivePokemonChain(element)
    });
  }
}

</script>
