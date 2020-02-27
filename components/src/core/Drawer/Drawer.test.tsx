import React from 'react';
import * as ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import { findByTestId } from '../test-utils';
import { Avatar } from '@material-ui/core';

import { DrawerComponent as Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSubheader } from './DrawerSubheader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerNavGroup } from './DrawerNavGroup';
import { InfoListItem } from '../InfoListItem';

Enzyme.configure({ adapter: new Adapter() });

let shallow: Shallow;
let mount: Mount;

describe('Drawer', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({});
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Drawer open={true} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders all the Drawer child components', () => {
        const wrapper = shallow(
            <Drawer open={true}>
                <DrawerHeader />
                <DrawerSubheader />
                <DrawerBody />
                <DrawerFooter />
            </Drawer>
        );

        // Finding two copies of each component because we are rendering twice for
        // different screen size.
        expect(wrapper.find(DrawerHeader).length).toEqual(2);
        expect(wrapper.find(DrawerSubheader).length).toEqual(2);
        expect(wrapper.find(DrawerBody).length).toEqual(2);
        expect(wrapper.find(DrawerFooter).length).toEqual(2);
    });
});

describe('DrawerHeader', () => {
    beforeEach(() => {
        shallow = createShallow({});
    });

    it('renders text correctly', () => {
        const wrapper = shallow(<DrawerHeader title={'foo'} subtitle={'bar'} />);
        expect(findByTestId('drawer-header-title', wrapper).text()).toEqual('foo');
        expect(findByTestId('drawer-header-subtitle', wrapper).text()).toEqual('bar');
    });

    it('renders titleContent', () => {
        const wrapper = shallow(<DrawerHeader titleContent={<Avatar />} />);
        expect(wrapper.find(Avatar).length).toEqual(1);
    });

    it('calls onIconClick', () => {
        const onIconClickFunction = jest.fn();
        const icon = <Avatar />;
        const wrapper = shallow(<DrawerHeader onIconClick={onIconClickFunction} icon={icon} />);
        expect(onIconClickFunction).not.toHaveBeenCalled();
        wrapper.find(Avatar).simulate('click');
        expect(onIconClickFunction).not.toHaveBeenCalledTimes(1);
    });
});

describe('DrawerNavGroup', () => {
    beforeEach(() => {
        shallow = createShallow({});
        mount = createMount({ strict: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders text correctly', () => {
        const wrapper = mount(<DrawerNavGroup title={'foo'} items={[]} />);
        expect(wrapper.text()).toEqual('foo');
    });

    it('renders custom content correctly', () => {
        const wrapper = mount(<DrawerNavGroup content={<Avatar />} items={[]} />);
        expect(wrapper.find(Avatar).length).toEqual(1);
    });

    it('renders its menu items recursively in the correct order', () => {
        const wrapper = mount(
            <DrawerNavGroup
                items={[
                    { title: 'a', itemID: 'a' },
                    {
                        title: 'b',
                        itemID: 'b',
                        items: [
                            {
                                title: 'b_0',
                                itemID: 'b_0',
                                items: [
                                    { title: 'b_0_0', itemID: 'b_0_0' },
                                    { title: 'b_0_1', itemID: 'b_0_1' },
                                ],
                            },
                            { title: 'b_1', itemID: 'b_1', items: [{ title: 'b_1_0', itemID: 'b_1_0' }] },
                        ],
                    },
                    {
                        title: 'c',
                        itemID: 'c',
                        items: [
                            {
                                title: 'c_0',
                                itemID: 'c_0',
                                items: [
                                    { title: 'c_0_0', itemID: 'c_0_0' },
                                    { title: 'c_0_1', itemID: 'c_0_1' },
                                ],
                            },
                        ],
                    },
                ]}
            />
        );

        const expectedNavItemTitleList = [
            'a',
            'b',
            'b_0',
            'b_0_0',
            'b_0_1',
            'b_1',
            'b_1_0',
            'c',
            'c_0',
            'c_0_0',
            'c_0_1',
        ];

        const navItemList = wrapper.find(InfoListItem);
        expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
        navItemList.forEach((item, index) => {
            expect(item.prop('title')).toEqual(expectedNavItemTitleList[index]);
        });
    });
});
