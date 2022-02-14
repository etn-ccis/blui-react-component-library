import React from 'react';
import * as ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import * as Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createMount, createShallow } from '@mui/material/test-utils';
import { findByTestId } from '../test-utils';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSubheader } from './DrawerSubheader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerNavGroup } from './DrawerNavGroup';
import { InfoListItem } from '../InfoListItem';
import MoreVert from '@mui/icons-material/MoreVert';
import { DrawerRailItem } from './DrawerRailItem';
import { DrawerNavItem } from './DrawerNavItem';

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

        expect(wrapper.find(DrawerHeader).length).toEqual(1);
        expect(wrapper.find(DrawerSubheader).length).toEqual(1);
        expect(wrapper.find(DrawerBody).length).toEqual(1);
        expect(wrapper.find(DrawerFooter).length).toEqual(1);
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
        const wrapper = mount(<DrawerNavGroup titleContent={<Avatar />} items={[]} />);
        expect(wrapper.find(Avatar).length).toEqual(1);
    });

    it('renders rightComponent correctly', () => {
        let wrapper = mount(<DrawerNavGroup items={[{ title: '', itemID: '', rightComponent: <MoreVert /> }]} />);
        expect(wrapper.find(MoreVert).length).toEqual(1);

        wrapper = mount(<DrawerNavGroup items={[{ title: '', itemID: '' }]} />);
        expect(wrapper.find(MoreVert).length).toEqual(0);
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

    it('renders its menu items declaratively in the correct order', () => {
        const wrapper = mount(
            <DrawerNavGroup>
                <DrawerNavItem title={'a'} itemID={'a'} />
                <DrawerNavItem title={'b'} itemID={'b'}>
                    <DrawerNavItem title={'b_0'} itemID={'b_0'}>
                        <DrawerNavItem title={'b_0_0'} itemID={'b_0_0'} />
                        <DrawerNavItem title={'b_0_1'} itemID={'b_0_1'} />
                    </DrawerNavItem>
                    <DrawerNavItem title={'b_1'} itemID={'b_1'}>
                        <DrawerNavItem title={'b_1_0'} itemID={'b_1_0'} />
                    </DrawerNavItem>
                </DrawerNavItem>
                <DrawerNavItem
                    title={'c'}
                    itemID={'c'}
                    items={[
                        {
                            title: 'c_0',
                            itemID: 'c_0',
                            items: [
                                { title: 'c_0_0', itemID: 'c_0_0' },
                                { title: 'c_0_1', itemID: 'c_0_1' },
                            ],
                        },
                    ]}
                />
            </DrawerNavGroup>
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

    it('inherits and overrides properties from Drawer', () => {
        const wrapper = shallow(
            <Drawer activeItemBackgroundColor={'white'} divider={true} open={true}>
                <DrawerBody>
                    <DrawerNavGroup items={[{ title: '', itemID: '' }]} />
                    <DrawerNavGroup
                        activeItemBackgroundColor={'black'}
                        divider={false}
                        items={[{ title: '', itemID: '' }]}
                    />
                </DrawerBody>
            </Drawer>
        )
            .find(DrawerBody)
            .at(0)
            .dive();
        const firstDrawerNavGroup = wrapper.find(DrawerNavGroup).get(0);
        expect(firstDrawerNavGroup.props.activeItemBackgroundColor).toEqual('white');
        expect(firstDrawerNavGroup.props.divider).toBeTruthy();
        const secondDrawerNavGroup = wrapper.find(DrawerNavGroup).get(1);
        expect(secondDrawerNavGroup.props.activeItemBackgroundColor).toEqual('black');
        expect(secondDrawerNavGroup.props.divider).toBeFalsy();
    });
});

describe('DrawerRailItem', () => {
    beforeEach(() => {
        shallow = createShallow({});
        mount = createMount({ strict: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders text at full size', () => {
        const wrapper = mount(<DrawerRailItem title={'Test'} itemID={'test'} icon={<></>} />);
        expect(wrapper.find(Typography).length).toEqual(1);
    });

    it('renders no text for condensed', () => {
        const wrapper = mount(<DrawerRailItem condensed title={'Test'} itemID={'test'} icon={<></>} />);
        expect(wrapper.find(Typography).length).toEqual(0);
    });
});
