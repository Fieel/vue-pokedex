<template>
  <div class="card" v-if="pokemonData && pokemonAdditionalInfo">
    
      <div class="title is-inline-block">
        <br>
        <p class="is-6 is-inline-block pokedex-number has-text-grey-light">#{{ pokemonAdditionalInfo.id }}</p>
        <p class="is-4 is-inline-block">
          {{ pokemonData.name }}
        </p>
      </div>
      <br>

      <p class="is-inline-block type" v-for="typeData in pokemonData.types" :key="typeData.slot">
        {{ typeData.type.name }} 
      </p> 
      
    <div class="card-image">
      <div class="level has-text-centered">
        <div class="level-item">
          <figure class="image is-96x96">
            <img v-bind:src="pokemonData.sprites.front_default" alt="Front sprite">
          </figure>
          <figure class="image is-96x96">
            <img v-bind:src="pokemonData.sprites.back_default" alt="Back sprite">
          </figure>
        </div>
      </div>
    </div>
    <div class="card-content">

      <div class="content">
        
        <p>{{ pokemonAdditionalInfo.flavor_text_entries[1].flavor_text }}</p>
        
        <p class="subtitle has-text-weight-bold has-text-left">Info</p>
        <div class="columns is-mobile">
          <div class="column">
            <p class="has-text-weight-semibold">Weight</p>
            {{ pokemonData.weight/10 }} kg
          </div>
          <div class="column">
            <p class="has-text-weight-semibold">Height</p>
            {{ pokemonData.height/10 }} m
          </div>
          <div class="column">
            <p class="has-text-weight-semibold">Type</p>
            {{ pokemonAdditionalInfo.genera[2].genus }}
          </div>
          <div class="column">
            <p class="has-text-weight-semibold">Generation</p>
            {{ pokemonAdditionalInfo.generation.name.substring(pokemonAdditionalInfo.generation.name.lastIndexOf('-') + 1).toUpperCase() }}
          </div>
        </div>

        <p class="subtitle has-text-weight-bold has-text-left">Stats</p>
        <div class="columns">
          <div class="column"
            v-for="item in pokemonData.stats"
            :key="item.stat.name">
            <p class="has-text-weight-semibold">{{ item.stat.name }}</p>
            {{ item.base_stat }}
          </div>
          </div>
        </div>

        <p class="subtitle has-text-weight-bold has-text-left">Evolutions</p>
        <div class="columns">
          <div
            class="column"
            v-for="item in pokemonEvolutionsData"
            :key="item.species_name">
            <a @click="changePokemon(item.species_name)">
              <img v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.species_id + '.png'" />
              <p>{{ item.species_name }}</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
    <div v-else class="loading-wrapper">
      <img src="../assets/pokeball-loading.gif" />
    </div>

</template>

<script lang="ts">

  import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
  import axios from 'axios';
  import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

  /**
   * PokemonCard main component, wil lstore all data about
   * a single pokèmon.
   */
  @Component
  export default class PokemonCard extends Vue {

    /**
     * Reading selected pokèmon data from State
     */
    @State('pokemonData') private pokemonData: any;
    @State('pokemonAdditionalInfo') private pokemonAdditionalInfo: any;
    @State('pokemonEvolutionsData') private pokemonEvolutionsData: any;

    /**
     * Vue.js hook, as soon as the component is created fetch some data.
     * In this case dispatch an action that handles the http call.
     */
    public created() {
      this.$store.dispatch('loadPokemon', 1);
    }

    /**
     * Update the selected pokemon data by fetching base on the
     * clicked pokemon and putting the data in the state.
     */
    private changePokemon = (pokemonName: string) => {
      this.$store.dispatch('loadPokemon', pokemonName);
    }

  }

</script>

<style scoped lang="scss">
  .bold{
    font-weight: bold;
  }
  .card{
    height: 100%;
    overflow: auto;
  }
  .vertical-margin{
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .PokemonCard{
    margin: 10px;
  }
  .pokedex-number{
    margin-right: 10px;
  }
  .title{
    margin-bottom: 2px;
  }
  .type{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .175rem .5rem .16rem;
    margin: 3px 7.5px 10px 0;
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.5;
    color: #fff;
    background-color: black;
  }
  .loading-wrapper{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
