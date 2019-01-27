<template>
  <div class="columns" style="height: 93vh">
    <div class="column" style="border-right: 1px solid rgba(10,10,10,.1)">
      <PokemonCard />
    </div>
    <div class="column">
      <PokemonList />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import PokemonCard from '@/components/PokemonCard.vue';
  import PokemonList from '@/components/PokemonList.vue';

  @Component({
    components: {
      PokemonCard,
      PokemonList,
    },
  })
  export default class Home extends Vue {}
</script>