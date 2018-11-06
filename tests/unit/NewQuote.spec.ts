import { shallowMount } from '@vue/test-utils';
import NewQuote from '@/components/NewQuote.vue';

describe('NewQuote.vue', () => {

  const wrapper = shallowMount(NewQuote);
  const textarea = wrapper.find('textarea');

  it('renders the instructions', () => {
    expect(wrapper.html()).toContain('<p>Type new quote below and hit enter</p>');
  });

  it('disables the textarea when the limit was reached', () => {
    const inputElement = textarea.element as HTMLInputElement;
    expect(inputElement.disabled).toBe(false);
    wrapper.setProps({ limitReached: true });
    expect(inputElement.disabled).toBe(true);

    wrapper.setProps({ limitReached: false }); // cleaning
  });

  it('emits addQuote event when enter button is triggered', () => {
    const inputElement = textarea.element as HTMLInputElement;
    inputElement.value = 'New Quote';
    textarea.trigger('keyup.enter');
    expect(wrapper.emitted().addNewQuote).toBeTruthy();
  });

  it('clears the textarea when the enter button is triggered', () => {
    wrapper.setData({ newQuote: 'New Quote' });
    textarea.trigger('keyup.enter');
    expect((wrapper.vm as any).newQuote).toBe('');
  });

});
