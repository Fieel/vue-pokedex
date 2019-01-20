<template>
<div class="PokemonList"> 
  <h1>List:</h1>
  <ul>
    <li v-for="item in pokemonList" :key="item.name">
      {{ item.name }}
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class PokemonList extends Vue {

  @Prop() private pokemonList!: any[];

    /**
     * Vue.js hook, as soon as the component is created fetch some data.
     */
    public created(){
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=802')
      .then((data) => {
        this.pokemonList = data.data.results;
      })
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
