import { shallow } from '../enzyme';
import * as React from 'react';
import BlockListContainer from './BlockListContainer';

describe('<BlockListContainer />', () => {
    describe('By default', () => {
        let component;
        beforeAll(() => {
            component = shallow(<BlockListContainer/>);
        });
        it('hasnt changed', () => {
            expect(component.html()).toMatchSnapshot();
        });
    });
});