<template>
  <v-container class="fill-height">
    <v-responsive>
      <v-row v-if="pokemonsResult.length" class="ma-0 mt-10">
        <v-col col="12" sm="6" md="4" v-for="pokemon in pokemonsResult" :key="pokemon.id">
          <PokemonCard :pokemon="pokemon" />
        </v-col>
      </v-row>
      <v-row v-else class="ma-0 mt-10 align-center justify-center">
        <h3>No pokémon found</h3>
        <v-btn to="/" class="ma-4">Back to Home</v-btn>
      </v-row>
    </v-responsive>
  </v-container>

</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

import PokemonCard from '@/components/pokemon/PokemonCard.vue';

const store = useAppStore()

const pokemonsResult = computed(() => store.currentPokemonsGetter);
</script>
