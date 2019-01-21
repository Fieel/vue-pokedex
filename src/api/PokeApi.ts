import axios from 'axios';

/**
 * Interfaces with the PokèApi free Web API:
 * https://pokeapi.co/
 */
export default class PokeApi {

  /**
   * PokèApi base URL
   */
  private baseURL: string = 'https://pokeapi.co/api/v2/';
  private endpoints: any = {
    pokemon: 'pokemon/',
    pokemonSpecies: 'pokemon-species/',
    evolutions: 'evolution-chain/',
  };

  /**
   * Return data of pokèmon given a pokèdex number.
   * @param pokemonName Pokedex number of the pokèmon
   */
  public getSingle(pokemonName: string) {
    return axios.get(this.baseURL + this.endpoints.pokemon + pokemonName)
      .then( (data: any) => {
        return data.data;
      });
  }

  public getAdditionalInfo(pokemonName: string) {
    return axios.get(this.baseURL + this.endpoints.pokemonSpecies + pokemonName)
      .then((data) => {
        return data.data;
      });
  }

    /**
   * Return the list of all pokèmon with basic data to build a list
   */
  public getEvolutions(pokemonName: string) {
    return axios.get(this.baseURL + this.endpoints.evolutions + pokemonName)
      .then((data) => {
        return data.data;
      });
  }

  /**
   * Return the list of all pokèmon with basic data to build a list
   */
  public getList = () => {
    return axios.get(this.baseURL + this.endpoints.pokemon + '?limit=802')
      .then((data) => {
        return data.data.results;
      });
  }
}
