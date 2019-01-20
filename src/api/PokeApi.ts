import axios from 'axios';

/**
 * Interfaces with the PokèApi free Web API:
 * https://pokeapi.co/
 */
export default class pokeApi {

  /**
   * PokèApi base URL
   */
  private baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';

  /**
   * Return data of pokèmon given a pokèdex number.
   * @param pokemonName Pokedex number of the pokèmon
   */
  public getSingle(pokemonName: string) {
    return axios.get(this.baseURL + pokemonName)
      .then( (data: any) => {
        return data.data;
      });
  }

  /**
   * Return the list of all pokèmon with basic data to build a list
   */
  public getList = () => {
    return axios.get(this.baseURL + '?limit=802')
      .then((data) => {
        return data.data.results;
      });
  }
}
