<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex text-center fill-height">
      <v-img contain height="200" src="@/assets/images/Poké_Ball_icon.svg" class="mt-16" />

      <h1 class="text-h2 font-weight-bold">Pokémon Search</h1>

      <v-row class="d-flex align-center justify-center mt-16">
        <pokemon-input @onSearch="serchPokemonByName" />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '@/store/app'
import PokemonInput from '../components/forms/PokemonInput.vue';

const router = useRouter()
const store = useAppStore();


const serchPokemonByName = async (name) => {
  store.$patch(
    { currentPokemons: [], }
  )
  await store.fetchPokemonSpecieByName(name).then((species) => {
    recursivePokemonChain(species.chain)
  })
  router.push('/search-results')
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
