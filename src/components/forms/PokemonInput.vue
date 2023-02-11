<template>
  <v-sheet width="400" class="mx-auto">
    <v-autocomplete v-model="pokemonInputed" :items="pokemonsFiltered" no-data-text="No pokémon found" item-value="name"
      item-title="name" label="Pokémon name" class="pokemon-input" @update:modelValue="onUpdateModelValue"
      @update:search="onUpdateSearch"></v-autocomplete>
  </v-sheet>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue'
import { useAppStore } from '@/store/app'

const store = useAppStore()
const pokemonsLimit = 50
const emit = defineEmits(['onSearch'])

const debounce = ref(null)
const pokeName = ref(null)
const pokemonInputed = ref(null)


const allPokemons = computed(() => store.allPokemonsGetter)
const pokemonsFiltered = computed(() =>
  !pokeName.value ? allPokemons.value.slice(0, pokemonsLimit) : filterPokemons(pokeName.value).slice(0, pokemonsLimit)
)

const filterPokemons = (pokemonName) => {
  return allPokemons.value.filter(({ name }) => name.includes(pokemonName))
}

const onUpdateModelValue = (searchName) => {
  emit('onSearch', searchName)
  pokeName.value = ''
}

const onUpdateSearch = (value) => {
  if (debounce.value) clearTimeout(debounce.value)
  debounce.value = setTimeout(() => {
    pokeName.value = value
  }, 400)
}

// created
store.fetchAllPokemons()
</script>

<style scoped lang="scss">

</style>