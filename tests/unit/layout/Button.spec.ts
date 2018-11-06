import { shallowMount } from '@vue/test-utils';
import Button from '@/components/layout/Button.vue';

describe('Button.vue', () => {

  const wrapper = shallowMount(Button);
  wrapper.setProps({ text: 'Example Text' });

  it('renders the button with its text', () => {
    const button = wrapper.find('.simple-btn');
    expect(
      button.text(),
    ).toEqual('Example Text');
  });

});
