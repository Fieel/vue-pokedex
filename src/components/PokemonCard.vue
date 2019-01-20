<template>

  <div class="PokemonCard">
    <div v-if="pokemonData">
      <br>
      <h1><span class="bold">Name: </span>{{ pokemonData.name }}</h1>
      <img v-bind:src="pokemonData.sprites.back_default"/>
      <p class="vertical-margin"><span>Weight: </span>{{ pokemonData.weight }} kg</p>
      <p class="vertical-margin"><span>Height: </span>{{ pokemonData.height }} ft</p>
      <p class="vertical-margin" v-for="typeData in pokemonData.types" :key="typeData.slot">
        {{ typeData.type.name }}
      </p>
    </div>
    <div v-else>
      loading...
    </div>
  </div>

</template>

<script lang="ts">

  import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
  import axios from 'axios';
  import {
    State,
    Getter,
    Action,
    Mutation,
    namespace
  } from 'vuex-class'

  /**
   * PokemonCard main component, wil lstore all data about 
   * a single pokèmon.
   */
  @Component
  export default class PokemonCard extends Vue {

    /**
     * Reading selected pokèmon data from State
     */
    @State('pokemonData') pokemonData: any;

    /**
     * Vue.js hook, as soon as the component is created fetch some data.
     * In this case dispatch an action that handles the http call.
     */
    public created(){
      this.$store.dispatch('loadPokemon', 1);
    }

  }

</script>

<style scoped lang="scss">
  .bold{
    font-weight: bold;
  }
  .vertical-margin{
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .PokemonCard{
    margin: 10px;
  }
</style>
