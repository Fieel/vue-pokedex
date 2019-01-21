export default class EvolutionsService {

  public buildChain(evoData: any): any[] {

    const evoChain = [];

    do {
      const evoDetails = evoData['evolution_details'][0];



      evoChain.push({
        species_name: evoData.species.name,
        species_id: this.extractIdFromUrl(evoData.species.url),
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      });

      evoData = evoData['evolves_to'][0];

    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

    return evoChain;
  }

  public extractIdFromUrl(url: string): string {
    let str = url; // url/{id}/
    str = str.slice(0, -1); // Trim trailing '/'
    const n = str.lastIndexOf('/'); // Save save position of remaining '/'
    const result = str.substring(n + 1); // Trim everything apart the id
    return result;
  }

}
