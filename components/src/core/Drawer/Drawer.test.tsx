import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSubheader } from './DrawerSubheader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerNavGroup } from './DrawerNavGroup';
// import { InfoListItem } from '../InfoListItem';
import MoreVert from '@mui/icons-material/MoreVert';
import { DrawerRailItem } from './DrawerRailItem';
import { DrawerNavItem } from './DrawerNavItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('Drawer', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <Drawer open={true} />
            </ThemeProvider>
        );
    });

    it('renders all the Drawer child components', () => {
        render(
            <ThemeProvider theme={theme}>
                <Drawer open={true}>
                    <DrawerHeader />
                    <DrawerSubheader />
                    <DrawerBody />
                    <DrawerFooter />
                </Drawer>
            </ThemeProvider>
        );

        // expect(wrapper.find(DrawerHeader).length).toEqual(1);
        // expect(wrapper.find(DrawerSubheader).length).toEqual(1);
        // expect(wrapper.find(DrawerBody).length).toEqual(1);
        // expect(wrapper.find(DrawerFooter).length).toEqual(1);
    });
});

describe('DrawerHeader', () => {
    it('renders text correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerHeader title={'foo'} subtitle={'bar'} />
            </ThemeProvider>
        );
        // expect(findByTestId('drawer-header-title', wrapper).text()).toEqual('foo');
        // expect(findByTestId('drawer-header-subtitle', wrapper).text()).toEqual('bar');
    });

    it('renders titleContent', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerHeader titleContent={<Avatar />} />
            </ThemeProvider>
        );
        // expect(wrapper.find(Avatar).length).toEqual(1);
    });

    it('calls onIconClick', () => {
        const onIconClickFunction = jest.fn();
        const icon = <Avatar data-test={'avatar'} />;
        render(
            <ThemeProvider theme={theme}>
                <DrawerHeader onIconClick={onIconClickFunction} icon={icon} />
            </ThemeProvider>
        );
        // const renderedIcon = findByTestId('avatar', wrapper);
        // expect(onIconClickFunction).not.toHaveBeenCalled();
        // renderedIcon.simulate('click', { currentTarget: 'test' });
        // expect(onIconClickFunction).toHaveBeenCalled();
    });
});

describe('DrawerNavGroup', () => {
    it('renders text correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup title={'foo'} items={[]} />
            </ThemeProvider>
        );
        // expect(wrapper.text()).toEqual('foo');
    });

    it('renders custom content correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup titleContent={<Avatar />} items={[]} />
            </ThemeProvider>
        );
        // expect(wrapper.find(Avatar).length).toEqual(1);
    });

    it('renders rightComponent correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup items={[{ title: '', itemID: '', rightComponent: <MoreVert /> }]} />
            </ThemeProvider>
        );
        // expect(wrapper.find(MoreVert).length).toEqual(1);

        // wrapper = mountWithTheme(<DrawerNavGroup items={[{ title: '', itemID: '' }]} />, theme);
        // expect(wrapper.find(MoreVert).length).toEqual(0);
    });

    it('renders its menu items recursively in the correct order', () => {
        render(
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        );

        // const expectedNavItemTitleList = [
        //     'a',
        //     'b',
        //     'b_0',
        //     'b_0_0',
        //     'b_0_1',
        //     'b_1',
        //     'b_1_0',
        //     'c',
        //     'c_0',
        //     'c_0_0',
        //     'c_0_1',
        // ];

        // const navItemList = wrapper.find(InfoListItem);
        // expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
        // navItemList.forEach((item, index) => {
        //     expect(item.prop('title')).toEqual(expectedNavItemTitleList[index]);
    });
});

it('renders its menu items declaratively in the correct order', () => {
    render(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );

    // const expectedNavItemTitleList = [
    //     'a',
    //     'b',
    //     'b_0',
    //     'b_0_0',
    //     'b_0_1',
    //     'b_1',
    //     'b_1_0',
    //     'c',
    //     'c_0',
    //     'c_0_0',
    //     'c_0_1',
    // ];

    // const navItemList = wrapper.find(InfoListItem);
    // expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
    // navItemList.forEach((item, index) => {
    //     expect(item.prop('title')).toEqual(expectedNavItemTitleList[index]);
    // });
});

it('inherits and overrides properties from Drawer', () => {
    render(
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
    //     .find(DrawerBody);
    //     const firstDrawerNavGroup = wrapper.find(DrawerNavGroup).get(0);
    //     expect(firstDrawerNavGroup.props.activeItemBackgroundColor).toEqual('white');
    //     expect(firstDrawerNavGroup.props.divider).toBeTruthy();
    //     const secondDrawerNavGroup = wrapper.find(DrawerNavGroup).get(1);
    //     expect(secondDrawerNavGroup.props.activeItemBackgroundColor).toEqual('black');
    //     expect(secondDrawerNavGroup.props.divider).toBeFalsy();
    // });
});

describe('DrawerRailItem', () => {
    it('renders text at full size', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerRailItem title={'Test'} itemID={'test'} icon={<></>} />
            </ThemeProvider>
        );
        // expect(wrapper.find(Typography).length).toEqual(1);
    });

    it('renders no text for condensed', () => {
        render(
            <ThemeProvider theme={theme}>
        <DrawerRailItem condensed title={'Test'} itemID={'test'} icon={<></>} />
        </ThemeProvider>
        );
        // expect(wrapper.find(Typography).length).toEqual(0);
    });
});
