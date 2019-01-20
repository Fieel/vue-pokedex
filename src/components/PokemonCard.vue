<template>
  <div>
    <input v-model="searchText" placeholder="Enter PokèDex number!">
    <button @click="loadPokemon()">Search PokèMon</button>
    <br>
    <h1><span class="bold">Name: </span>{{ pokemonName }}</h1>
    <img v-bind:src="pokemonSprite"/>
    <p class="vertical-margin"><span>Weight: </span>{{ pokemonWeight }} kg</p>
    <p class="vertical-margin"><span>Height: </span>{{ pokemonHeight }} ft</p>
    <p class="vertical-margin" v-for="typeData in pokemonTypes" :key="typeData.slot">
      {{ typeData.type.name }}
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
  import axios from 'axios';

  /**
   * PokemonCard main component
   */
  @Component
  export default class PokemonCard extends Vue {

    /**
     * Search string
     */
    @Prop() searchText: String = "";
    /**
     * Pokèmon Data to display in the template
     */
    @Prop() pokemonData: any = { name: 'null', weight: 0, sprites: {}, types: []};

    /**
     * Vue.js hook, as soon as the component is created fetch some data.
     */
    public created(){
      axios.get('https://pokeapi.co/api/v2/pokemon/' + Math.floor((Math.random()*600)) )
      .then(data => {
        this.pokemonData = data.data;
      })
    }

    /**
     * Load a new pokemon given the Pokèdex number.
     * Triggered on button press.
     */
    loadPokemon = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon/'+this.searchText)
      .then(data => {
        this.pokemonData = data.data;
      })
    }

    // Computed data
    get pokemonName() {
      return this.pokemonData.name;
    }
    get pokemonSprite() {
      return this.pokemonData.sprites.back_default;
    }
    get pokemonWeight() {
      return this.pokemonData.weight;
    }
    get pokemonHeight() {
      return this.pokemonData.height;
    }
    get pokemonTypes() {
      return this.pokemonData.types;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bold{
    font-weight: bold;
  }
  .vertical-margin{
    margin-top: 2px;
    margin-bottom: 2px;
  }
</style>
