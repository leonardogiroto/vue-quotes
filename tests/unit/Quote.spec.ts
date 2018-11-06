import { shallowMount } from '@vue/test-utils';
import Quote from '@/components/Quote.vue';

describe('Header.vue', () => {

  const wrapper = shallowMount(Quote);
  wrapper.setProps({ quote: 'Example Quote' });

  it('renders the quote with its text', () => {
    const quote = wrapper.find('.quote');
    expect(
      quote.text(),
    ).toEqual('Example Quote');
  });

});
