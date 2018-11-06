import { shallowMount } from '@vue/test-utils';
import Notification from '@/components/layout/Notification.vue';

describe('Notification.vue', () => {

  const wrapper = shallowMount(Notification);
  wrapper.setProps({ text: 'Example Text' });

  it('renders the notification with its text', () => {
    const notif = wrapper.find('.notification');
    expect(
      notif.text(),
    ).toEqual('Example Text');
  });

});
