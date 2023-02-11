<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="200" src="@/assets/images/Poké_Ball_icon.svg" />

      <h1 class="text-h2 font-weight-bold">Pokémon Search</h1>

      <v-row class="d-flex align-center justify-center mt-16">
        <pokemon-input />
      </v-row>
      <div class="py-14"></div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import PokemonInput from './forms/PokemonInput.vue';

export default {
  name: 'SearchPage',
  components: {
    PokemonInput,
  }
}
</script>
