<template>
  <v-container class="fill-height">
    <v-responsive>
      <v-row>
        <v-col sm="4" v-for="pokemon in pokemonsResult" :key="pokemon.id">
          <PokemonCard :pokemon="pokemon" />
        </v-col>
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