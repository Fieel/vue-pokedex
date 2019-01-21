import Vue from 'vue';
import Vuex from 'vuex';

// Custom API wrapper
import PokeApi from '@/api/PokeApi';
const pokeApi = new PokeApi();

// Custom service to build the pokèmon's evolution chain
import EvolutionsService from '@/services/EvolutionsService';

Vue.use(Vuex);

/**
 * This store object hosts the state structure,
 * mutations, actions and everything related to the Flux
 * of data in the application.
 */
export default new Vuex.Store({
  state: {
    pokemonData: null,
    pokemonAdditionalInfo: null,
    pokemonEvolutionsData: null,
    pokemonList: [],
  },
  // Mutations edit the state itself and are called by actions
  mutations: {
    loadingStatusUpdate(state) {
      state.pokemonData = null;
      state.pokemonAdditionalInfo = null;
      state.pokemonEvolutionsData = null;
    },
    updatePokemon(state, data) {
      state.pokemonData = data;
    },
    updatePokemonInfo(state, data) {
      state.pokemonAdditionalInfo = data;
    },
    updatePokemonEvolutions(state, data) {
      state.pokemonEvolutionsData = data;
    },
    updateList(state, data) {
      state.pokemonList = data;
    },
  },
  // Actions handle the side effects and call mutations
  actions: {
    loadPokemon(context, pokemonName) {
      context.commit('loadingStatusUpdate');
      pokeApi.getSingle(pokemonName).then( (data) => {
        context.commit('updatePokemon', data);
      });
      pokeApi.getAdditionalInfo(pokemonName).then( (data) => {
        context.commit('updatePokemonInfo', data);
        context.dispatch('loadEvolutions', data.evolution_chain.url);
      });
    },
    loadList(context) {
      pokeApi.getList().then( (data) => {
        context.commit('updateList', data);
      });
    },
    loadEvolutions(context, evolutionChainUrl) {

      const evolutionsService = new EvolutionsService();

      // Extract the id of the evolution-chain of this pokèmon from the url
      const result = evolutionsService.extractIdFromUrl(evolutionChainUrl);

      pokeApi.getEvolutions(result).then( (rawData) => {
        const evolutionData = evolutionsService.buildChain(rawData.chain);
        context.commit('updatePokemonEvolutions', evolutionData);
      });
    },

  },
});
