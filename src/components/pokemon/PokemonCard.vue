<template>
  <v-card class="mx-auto" max-width="340">
    <v-img :src="pokemonImage"></v-img>

    <v-card-title>
      {{ pokemon.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-chip v-for="type in pokemonTypes" :key="type" class="mr-2">{{ type }}</v-chip>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" @click="show = !show">
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <ul class="d-flex justify-center flex-column pa-5">
          <h4>Stats </h4>
          <li class="mx-6" v-for="stat in pokemonStats" :key="stat">{{ stat.name }} : {{ stat.value }}</li>
        </ul>

        <ul class="d-flex flex-column justify-center pa-5">
          <h4>Abilities </h4>
          <li class="mx-6" v-for="name in abilitiesNames" :key="name">{{ name }}</li>
        </ul>

      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['pokemon']);

const pokemonImage = computed(() => props.pokemon.sprites.front_default)
const pokemonTypes = computed(() => props.pokemon.types.map((type) => type.type.name))
const pokemonStats = computed(() => props.pokemon.stats.map((stat) => { return { name: stat.stat.name, value: stat.base_stat } }))
const abilitiesNames = computed(() => props.pokemon.abilities.map(ability => ability.ability.name))


console.log(props)
const show = ref(false)
</script>