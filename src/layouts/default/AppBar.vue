<template>
  <v-app-bar flat>
    <div class="brand-img">
      <router-link  to="/"><v-img  width="120px" src="@/assets/images/International_Pokémon_logo.svg" /></router-link>

    </div>
   
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped lang="scss">
.brand-img {
  margin-left: 40px;
  transition: ease .3s;
  transform: scale(1.0);
  :hover {
    transform: scale(1.2);
    transition: ease .3s;
  }
}
</style>