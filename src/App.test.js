import { mount } from '../src/enzyme';
import * as React from 'react';
import App from './App';

describe('<App />', () => {
  describe('By default', () => {
    let component;
    beforeAll(() => {
      component = mount(<App/>);
    });
    it('hasnt changed', () => {
      expect(component.html()).toMatchSnapshot();
    });
  });
});