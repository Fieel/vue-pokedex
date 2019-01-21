<template>

  <div v-if="pokemonList" class="PokemonList">
    <ul>
      <li
      @click="changePokemon(item.name)"
      v-for="(item, index) in pokemonList"
      :key="item.name">
        #{{ index }}: {{ item.name }}
      </li>
    </ul>
  </div>

</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

  @Component
  export default class PokemonList extends Vue {

    /**
     * Property that holds the whole pokemon list,
     * readen in real time from the sate.
     */
    @State('pokemonList') private pokemonList: any;

    /**
     * Vue.js hook, as soon as the component is created fetch some data.
     * Dispatch an action to update the state with the list of the pokemon.
     */
    public created() {
        this.$store.dispatch('loadList');
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
  .PokemonList{
    height: 80vh;
    overflow: auto;
  }
</style>
