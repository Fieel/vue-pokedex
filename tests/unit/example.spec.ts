import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PokemonCard from '@/components/PokemonCard.vue';

describe('PokemonCard.vue', () => {
  it('renders props.msg when passed', () => {
    const pokemonData = {};
    const wrapper = shallowMount(PokemonCard, {
      propsData: { pokemonData },
    });
    expect(wrapper.text()).to.include(pokemonData);
  });
});
