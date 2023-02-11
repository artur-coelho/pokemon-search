<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="pokemonImage" height="200px" cover></v-img>

    <v-card-title>
      {{ pokemon.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-chip v-for="type in pokemonTypes" :key="type" class="mr-2">{{ type }}</v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <!-- <v-chip v-for="item in abilitiesNames" :key="item"></v-chip>
          {{ item }} -->
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['pokemon']);

const pokemonImage = computed(() => props.pokemon.sprites.front_default)
const pokemonTypes = computed(() => props.pokemon.types.map((type) => type.type.name))
// const abilitiesNames = computed(() => props.abilities.map(ability => ability.ability.name))


console.log(props)
const show = ref(false)
</script>