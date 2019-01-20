import Vue from 'vue';
import Vuex from 'vuex';

// Custom API wrapper
import PokeApi from '@/api/PokeApi';
const pokeApi = new PokeApi();

Vue.use(Vuex);

/**
 * This store object hosts the state structure,
 * mutations, actions and everything related to the Flux
 * of data in the application.
 */
export default new Vuex.Store({
  state: {
    pokemonData: null,
    pokemonList: [],
  },
  // Mutations edit the state itself and are called by actions
  mutations: {
    loadingStatusUpdate(state) {
      state.pokemonData = null;
    },
    updatePokemon(state, data) {
      state.pokemonData = data;
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
    },
    loadList(context) {
      pokeApi.getList().then( (data) => {
        context.commit('updateList', data);
      });
    },
  },
});
