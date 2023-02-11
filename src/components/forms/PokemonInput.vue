<template>
  <v-sheet width="400" class="mx-auto">
    <v-autocomplete v-model="pokemonInputed" :items="pokemonsFiltered" no-data-text="Nenhum pokemon encontrado"
      item-value="name" item-title="name" label="Nome do pokemon" class="pokemon-input"
      @update:modelValue="onUpdateModelValue" @update:search="onUpdateSearch"></v-autocomplete>
  </v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'

const store = useAppStore()
const pokemonsLimit = 50

const debounce = ref(null)
const pokeName = ref(null)
const pokemonInputed = ref(null)

const allPokemons = computed(() => store.allPokemonsGetter)
const pokemonsFiltered = computed(() =>
  !pokeName.value ? allPokemons.value.slice(0, pokemonsLimit) : filterAllPokemons(pokeName.value).slice(0, pokemonsLimit)
)

const filterAllPokemons = (pokemonName) => {
  return allPokemons.value.filter(({ name }) => name.includes(pokemonName))
}

const onUpdateModelValue = () => {
  pokeName.value = ''
}

const onUpdateSearch = (value) => {
  if (debounce.value) clearTimeout(debounce.value)
  debounce.value = setTimeout(() => {
    pokeName.value = value
  }, 300)
}

// created
store.fetchAllPokemons()
</script>

<style scoped lang="scss">

</style>