import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import Progress from '@/components/layout/Progress.vue';

describe('Header.vue', () => {

  const wrapper = shallowMount(Header);
  const progressComponent = wrapper.find(Progress);

  it('renders the title', () => {
    expect(wrapper.html()).toContain('<h1>MY QUOTES</h1>');
  });

  it('renders the Progress component', () => {
    expect(progressComponent).not.toBeNull();
  });

  it('sets the progress correctly', () => {
    wrapper.setProps({ currentProgress: 2 });
    expect(wrapper.props().currentProgress).toEqual(2);
    expect(progressComponent.props().current).toEqual(2);
    expect(progressComponent.props().total).toEqual(10);
  });

});
