import TestUtil from '../Util/TestUtil';
import CircleMenu from './CircleMenu';

describe('<CircleMenu />', () => {
  it('is defined', () => {
    expect(CircleMenu).toBeDefined();
  });

  it('can be rendered', () => {
    const wrapper = TestUtil.mountComponent(CircleMenu, {
      children: ['A', 'B'],
      position: [0, 0]
    });
    expect(wrapper).toBeDefined();
  });

  it('contains the passed children', () => {
    const wrapper = TestUtil.mountComponent(CircleMenu, {
      children: ['A', 'B'],
      position: [0, 0]
    });
    expect(wrapper.find('CircleMenuItem').length).toBe(2);
    expect(wrapper.find('CircleMenuItem').at(0).props().children).toBe('A');
    expect(wrapper.find('CircleMenuItem').at(1).props().children).toBe('B');
  });

  it('applies the transformation on update', () => {
    const animationDuration = 1;
    const wrapper = TestUtil.mountComponent(CircleMenu, {
      children: ['A', 'B'],
      position: [0, 0],
      animationDuration: animationDuration
    });
    const instance = wrapper.instance();
    const transformationSpy = jest.spyOn(instance, 'applyTransformation');

    wrapper.setProps({
      position: [100, 100]
    });

    expect.assertions(1);

    return new Promise(resolve => {
      setTimeout(resolve, animationDuration + 100);
    })
      .then(() => {
        expect(transformationSpy).toHaveBeenCalledTimes(1);
        transformationSpy.mockRestore();
      });
  });

  describe('applyTransformation', () => {
    it('applies the transformation to the ref', () => {
      const diameter = 1337;
      const animationDuration = 1;
      const wrapper = TestUtil.mountComponent(CircleMenu, {
        diameter: diameter,
        children: ['A', 'B'],
        position: [0, 0],
        animationDuration: animationDuration
      });
      const instance = wrapper.instance();

      instance.applyTransformation();

      expect.assertions(2);

      return new Promise(resolve => {
        setTimeout(resolve, animationDuration + 100);
      })
        .then(() => {
          expect(instance._ref.style.width).toBe('1337px');
          expect(instance._ref.style.height).toBe('1337px');
        });
    });
  });

});
