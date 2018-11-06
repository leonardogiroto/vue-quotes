import { shallowMount } from '@vue/test-utils';
import Progress from '@/components/layout/Progress.vue';

describe('Progress.vue', () => {

  const wrapper = shallowMount(Progress);
  wrapper.setProps({ current: 2, total: 10 });

  it('renders the progress in text correctly', () => {
    expect(
      wrapper.html(),
    ).toContain('<p>2 / 10</p>');
  });

  it('renders the progress overlay width correctly', () => {
    const overlay = wrapper.find('.progress-overlay');
    expect(
      overlay.element.style.width,
    ).toEqual('20%');
  });

});
