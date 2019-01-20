<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <PokemonCard />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PokemonCard from '@/components/PokemonCard.vue';

  @Component({
    components: {
      PokemonCard,
    },
  })
  export default class Home extends Vue {}
</script>
