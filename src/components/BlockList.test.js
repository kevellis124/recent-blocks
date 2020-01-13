import { shallow } from '../enzyme';
import * as React from 'react';
import BlockList from './BlockList';

describe('<BlockList />', () => {
    describe('By default', () => {
        let component;
        beforeAll(() => {
            component = shallow(<BlockList/>);
        });
        it('hasnt changed', () => {
            expect(component.html()).toMatchSnapshot();
        });
    });
});