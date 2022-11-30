import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from '@mui/material/Avatar';
import { Drawer } from './Drawer';
import { DrawerHeader } from './DrawerHeader';
import { DrawerSubheader } from './DrawerSubheader';
import { DrawerBody } from './DrawerBody';
import { DrawerFooter } from './DrawerFooter';
import { DrawerNavGroup } from './DrawerNavGroup';
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
        expect(screen.getByTestId('blui-drawer-header')).toBeTruthy();
        expect(screen.getByTestId('blui-drawer-sub-header')).toBeTruthy();
        expect(screen.getByTestId('blui-drawer-body')).toBeTruthy();
        expect(screen.getByTestId('blui-drawer-footer')).toBeTruthy();
    });
});

describe('DrawerHeader', () => {
    it('renders text correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerHeader title={'header title'} subtitle={'header subtitle'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-drawer-header-title')).toHaveTextContent('header title');
        expect(screen.getByTestId('blui-drawer-header-subtitle')).toHaveTextContent('header subtitle');
    });

    it('renders titleContent', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerHeader titleContent={<Avatar />} />
            </ThemeProvider>
        );
        expect(screen.findByRole('icon')).toBeTruthy();
    });

    // it('calls onIconClick', () => {
    //     const onIconClickFunction = jest.fn();
    //     const icon = <Avatar data-test={'avatar'} />;
    //     render(
    //         <ThemeProvider theme={theme}>
    //             <DrawerHeader onIconClick={onIconClickFunction} icon={icon} />
    //         </ThemeProvider>
    //     );
    // const renderedIcon = findByTestId('avatar', wrapper);
    // expect(onIconClickFunction).not.toHaveBeenCalled();
    // renderedIcon.simulate('click', { currentTarget: 'test' });
    // expect(onIconClickFunction).toHaveBeenCalled();
    // });
});

describe('DrawerNavGroup', () => {
    it('renders text correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup title={'nav group title'} items={[]} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-drawer-nav-group')).toHaveTextContent('nav group title');
    });

    it('renders custom content correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup titleContent={<Avatar />} items={[]} />
            </ThemeProvider>
        );
        expect(screen.findByRole('icon')).toBeTruthy();
    });

    it('renders rightComponent correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerNavGroup items={[{ title: '', itemID: '', rightComponent: <MoreVert /> }]} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('MoreVertIcon')).toBeInTheDocument();
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

        const navItemList = screen.getAllByTestId('blui-drawer-nav-item');
        expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
        navItemList.forEach((item, index) => {
            expect(item).toHaveTextContent(expectedNavItemTitleList[index]);
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

        const navItemList = screen.getAllByTestId('blui-drawer-nav-item');
        expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
        navItemList.forEach((item, index) => {
            expect(item).toHaveTextContent(expectedNavItemTitleList[index]);
        });
    });

    // it('inherits and overrides properties from Drawer', () => {
    //     render(
    //         <ThemeProvider theme={theme}>
    //             <Drawer activeItemBackgroundColor={'white'} divider={true} open={true}>
    //                 <DrawerBody>
    //                     <DrawerNavGroup items={[{ title: 'title 1', itemID: '' }]} />
    //                     <DrawerNavGroup
    //                         activeItemBackgroundColor={'black'}
    //                         divider={false}
    //                         items={[{ title: 'title 2', itemID: '' }]}
    //                     />
    //                 </DrawerBody>
    //             </Drawer>
    //         </ThemeProvider>
    //     );
    //     // const firstDrawerNavGroup = screen.getByText(/title 1/i);

    //     // const firstDrawerNavGroup = wrapper.find(DrawerNavGroup).get(0);
    //     // expect(firstDrawerNavGroup.props.activeItemBackgroundColor).toEqual('white');
    //     // expect(firstDrawerNavGroup.props.divider).toBeTruthy();

    //     //     const secondDrawerNavGroup = wrapper.find(DrawerNavGroup).get(1);
    //     //     expect(secondDrawerNavGroup.props.activeItemBackgroundColor).toEqual('black');
    //     //     expect(secondDrawerNavGroup.props.divider).toBeFalsy();
    //     // });
});

describe('DrawerRailItem', () => {
    it('renders text at full size', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerRailItem title={'Test'} itemID={'test'} icon={<></>} />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('Test')).toBeVisible();
    });

    it('renders no text for condensed', () => {
        render(
            <ThemeProvider theme={theme}>
                <DrawerRailItem condensed title={'Test'} itemID={'test'} icon={<></>} />
            </ThemeProvider>
        );
        expect(screen.queryByText('Test')).toBeFalsy();
        expect(screen.queryByText('Test')).toBeNull();
    });
});
