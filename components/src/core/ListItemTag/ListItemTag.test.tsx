import React from 'react';
import ReactDOM from 'react-dom';
import { Shallow } from '../types';
import { ListItemTag } from './ListItemTag';
import { findByTestId, getComputedStyleFromHTMLString } from '../test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Colors from '@pxblue/colors';
import color from 'color';

import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

let shallow: Shallow;

describe('ListItemTag', () => {
    beforeEach(() => {
        shallow = createShallow();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListItemTag label={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render list-item-tag wrapper', () => {
        const wrapper = shallow(<ListItemTag label={'test'} />);
        expect(findByTestId('list-item-tag', wrapper)).toBeTruthy();
    });

    it('renders the correct label text', () => {
        const wrapper = shallow(<ListItemTag label={'test'} />);
        expect(wrapper.text()).toEqual('test');
    });

    it('renders with correct colors', () => {
        const fontColor = Colors.gold[200];
        const backgroundColor = Colors.green[900];
        const wrapper = shallow(<ListItemTag label={'test'} fontColor={fontColor} backgroundColor={backgroundColor} />);
        const computedStyle = getComputedStyleFromHTMLString(wrapper.html());

        expect(computedStyle.color).toEqual(
            color(fontColor)
                .rgb()
                .string()
        );
        expect(computedStyle.backgroundColor).toEqual(
            color(backgroundColor)
                .rgb()
                .string()
        );
    });
});
