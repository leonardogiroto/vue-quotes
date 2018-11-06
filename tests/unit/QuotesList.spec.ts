import { shallowMount } from '@vue/test-utils';
import QuotesList from '@/components/QuotesList.vue';
import Notification from '@/components/layout/Notification.vue';

describe('QuotesList.vue', () => {

  const wrapper = shallowMount(QuotesList);

  it('renders the obs', () => {
    const obs = wrapper.find('.obs');
    expect(
      obs.html(),
    ).toEqual(
      '<p class=\"obs\"><i>obs: click on a quote to delete it!</i></p>',
    );
  });

  it('hides the obs', () => {
    wrapper.setData({ quotes: [] });
    const obs = wrapper.find('.obs');
    expect(
      obs.html(),
    ).toEqual(
      '<p class=\"obs\"><!----></p>',
    );
  });

});
