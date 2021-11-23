import React from 'react';
import ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import { InfoListItem } from './InfoListItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestId, getComputedStyleFromHTMLString } from '../test-utils';
import * as Colors from '@brightlayer-ui/colors';
import color from 'color';

import Chevron from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import { Avatar } from '@material-ui/core';

import { createMount, createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

let mount: Mount;
let shallow: Shallow;

describe('InfoListItem', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InfoListItem title={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with icon', () => {
        let wrapper = shallow(<InfoListItem hidePadding icon={<PersonIcon />} title="Test" />);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
        wrapper = shallow(<InfoListItem hidePadding title="Test" />);
        expect(wrapper.find(PersonIcon).length).toEqual(0);
    });

    it('renders correct icon Color', () => {
        // the following two lines are used to resolve a race condition
        let wrapper = shallow(<InfoListItem title={'Test'} />);
        let testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());

        wrapper = shallow(<InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} />);
        testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        expect(testedStyle.color).toEqual('red');
        testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        expect(testedStyle.backgroundColor).toEqual('red');

        wrapper = shallow(
            <InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} iconColor={'green'} />
        );
        testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        expect(testedStyle.color).toEqual('green');
        testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        expect(testedStyle.backgroundColor).toEqual('red');

        wrapper = shallow(<InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} avatar />);
        testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        expect(testedStyle.color).toEqual(
            color(Colors.white['50'])
                .rgb()
                .string()
        );
        expect(testedStyle.backgroundColor).toEqual('red');
        testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        expect(testedStyle.backgroundColor).toEqual('red');

        wrapper = shallow(
            <InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} iconColor={'blue'} avatar />
        );
        testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        expect(testedStyle.color).toEqual('blue');
        expect(testedStyle.backgroundColor).toEqual('red');
        testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        expect(testedStyle.backgroundColor).toEqual('red');
    });

    it('renders rightComponent', () => {
        let wrapper = shallow(<InfoListItem title="Test" chevron />);
        expect(wrapper.find(Chevron).length).toEqual(1);

        wrapper = shallow(<InfoListItem title="Test" />);
        expect(wrapper.find(Chevron).length).toEqual(0);

        wrapper = shallow(<InfoListItem title="Test" onClick={(): void => {}} rightComponent={<PersonIcon />} />);
        expect(wrapper.find(Chevron).length).toEqual(0);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
    });
    it('renders leftComponent', () => {
        const wrapper = shallow(<InfoListItem title="Test" leftComponent={<PersonIcon />} />);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
    });
});
