// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import * as Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { findByTestId, mountWithTheme } from '../test-utils';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';

// import { Drawer } from './Drawer';
// import { DrawerHeader } from './DrawerHeader';
// import { DrawerSubheader } from './DrawerSubheader';
// import { DrawerBody } from './DrawerBody';
// import { DrawerFooter } from './DrawerFooter';
// import { DrawerNavGroup } from './DrawerNavGroup';
// import { InfoListItem } from '../InfoListItem';
// import MoreVert from '@mui/icons-material/MoreVert';
// import { DrawerRailItem } from './DrawerRailItem';
// import { DrawerNavItem } from './DrawerNavItem';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import * as BLUIThemes from '@brightlayer-ui/react-themes';

// const theme = createTheme(BLUIThemes.blue);

// Enzyme.configure({ adapter: new Adapter() });

// describe('Drawer', () => {
//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         const root = createRoot(div);
//         root.render(
//             <ThemeProvider theme={theme}>
//                 <Drawer open={true} />
//             </ThemeProvider>
//         );
//     });

//     it('renders all the Drawer child components', () => {
//         const wrapper = mountWithTheme(
//             <Drawer open={true}>
//                 <DrawerHeader />
//                 <DrawerSubheader />
//                 <DrawerBody />
//                 <DrawerFooter />
//             </Drawer>,
//             theme
//         );

//         expect(wrapper.find(DrawerHeader).length).toEqual(1);
//         expect(wrapper.find(DrawerSubheader).length).toEqual(1);
//         expect(wrapper.find(DrawerBody).length).toEqual(1);
//         expect(wrapper.find(DrawerFooter).length).toEqual(1);
//     });
// });

// describe('DrawerHeader', () => {
//     it('renders text correctly', () => {
//         const wrapper = mountWithTheme(<DrawerHeader title={'foo'} subtitle={'bar'} />, theme);
//         expect(findByTestId('drawer-header-title', wrapper).text()).toEqual('foo');
//         expect(findByTestId('drawer-header-subtitle', wrapper).text()).toEqual('bar');
//     });

//     it('renders titleContent', () => {
//         const wrapper = mountWithTheme(<DrawerHeader titleContent={<Avatar />} />, theme);
//         expect(wrapper.find(Avatar).length).toEqual(1);
//     });

//     it('calls onIconClick', () => {
//         const onIconClickFunction = jest.fn();
//         const icon = <Avatar data-test={'avatar'} />;
//         const wrapper = mountWithTheme(<DrawerHeader onIconClick={onIconClickFunction} icon={icon} />, theme);
//         const renderedIcon = findByTestId('avatar', wrapper);
//         expect(onIconClickFunction).not.toHaveBeenCalled();
//         renderedIcon.simulate('click', { currentTarget: 'test' });
//         expect(onIconClickFunction).toHaveBeenCalled();
//     });
// });

// describe('DrawerNavGroup', () => {
//     it('renders text correctly', () => {
//         const wrapper = mountWithTheme(<DrawerNavGroup title={'foo'} items={[]} />, theme);
//         expect(wrapper.text()).toEqual('foo');
//     });

//     it('renders custom content correctly', () => {
//         const wrapper = mountWithTheme(<DrawerNavGroup titleContent={<Avatar />} items={[]} />, theme);
//         expect(wrapper.find(Avatar).length).toEqual(1);
//     });

//     it('renders rightComponent correctly', () => {
//         let wrapper = mountWithTheme(
//             <DrawerNavGroup items={[{ title: '', itemID: '', rightComponent: <MoreVert /> }]} />,
//             theme
//         );
//         expect(wrapper.find(MoreVert).length).toEqual(1);

//         wrapper = mountWithTheme(<DrawerNavGroup items={[{ title: '', itemID: '' }]} />, theme);
//         expect(wrapper.find(MoreVert).length).toEqual(0);
//     });

//     it('renders its menu items recursively in the correct order', () => {
//         const wrapper = mountWithTheme(
//             <DrawerNavGroup
//                 items={[
//                     { title: 'a', itemID: 'a' },
//                     {
//                         title: 'b',
//                         itemID: 'b',
//                         items: [
//                             {
//                                 title: 'b_0',
//                                 itemID: 'b_0',
//                                 items: [
//                                     { title: 'b_0_0', itemID: 'b_0_0' },
//                                     { title: 'b_0_1', itemID: 'b_0_1' },
//                                 ],
//                             },
//                             { title: 'b_1', itemID: 'b_1', items: [{ title: 'b_1_0', itemID: 'b_1_0' }] },
//                         ],
//                     },
//                     {
//                         title: 'c',
//                         itemID: 'c',
//                         items: [
//                             {
//                                 title: 'c_0',
//                                 itemID: 'c_0',
//                                 items: [
//                                     { title: 'c_0_0', itemID: 'c_0_0' },
//                                     { title: 'c_0_1', itemID: 'c_0_1' },
//                                 ],
//                             },
//                         ],
//                     },
//                 ]}
//             />,
//             theme
//         );

//         const expectedNavItemTitleList = [
//             'a',
//             'b',
//             'b_0',
//             'b_0_0',
//             'b_0_1',
//             'b_1',
//             'b_1_0',
//             'c',
//             'c_0',
//             'c_0_0',
//             'c_0_1',
//         ];

//         const navItemList = wrapper.find(InfoListItem);
//         expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
//         navItemList.forEach((item, index) => {
//             expect(item.prop('title')).toEqual(expectedNavItemTitleList[index]);
//         });
//     });

//     it('renders its menu items declaratively in the correct order', () => {
//         const wrapper = mountWithTheme(
//             <DrawerNavGroup>
//                 <DrawerNavItem title={'a'} itemID={'a'} />
//                 <DrawerNavItem title={'b'} itemID={'b'}>
//                     <DrawerNavItem title={'b_0'} itemID={'b_0'}>
//                         <DrawerNavItem title={'b_0_0'} itemID={'b_0_0'} />
//                         <DrawerNavItem title={'b_0_1'} itemID={'b_0_1'} />
//                     </DrawerNavItem>
//                     <DrawerNavItem title={'b_1'} itemID={'b_1'}>
//                         <DrawerNavItem title={'b_1_0'} itemID={'b_1_0'} />
//                     </DrawerNavItem>
//                 </DrawerNavItem>
//                 <DrawerNavItem
//                     title={'c'}
//                     itemID={'c'}
//                     items={[
//                         {
//                             title: 'c_0',
//                             itemID: 'c_0',
//                             items: [
//                                 { title: 'c_0_0', itemID: 'c_0_0' },
//                                 { title: 'c_0_1', itemID: 'c_0_1' },
//                             ],
//                         },
//                     ]}
//                 />
//             </DrawerNavGroup>,
//             theme
//         );

//         const expectedNavItemTitleList = [
//             'a',
//             'b',
//             'b_0',
//             'b_0_0',
//             'b_0_1',
//             'b_1',
//             'b_1_0',
//             'c',
//             'c_0',
//             'c_0_0',
//             'c_0_1',
//         ];

//         const navItemList = wrapper.find(InfoListItem);
//         expect(navItemList.length).toEqual(expectedNavItemTitleList.length);
//         navItemList.forEach((item, index) => {
//             expect(item.prop('title')).toEqual(expectedNavItemTitleList[index]);
//         });
//     });

//     it('inherits and overrides properties from Drawer', () => {
//         const wrapper = mountWithTheme(
//             <Drawer activeItemBackgroundColor={'white'} divider={true} open={true}>
//                 <DrawerBody>
//                     <DrawerNavGroup items={[{ title: '', itemID: '' }]} />
//                     <DrawerNavGroup
//                         activeItemBackgroundColor={'black'}
//                         divider={false}
//                         items={[{ title: '', itemID: '' }]}
//                     />
//                 </DrawerBody>
//             </Drawer>,
//             theme
//         ).find(DrawerBody);
//         const firstDrawerNavGroup = wrapper.find(DrawerNavGroup).get(0);
//         expect(firstDrawerNavGroup.props.activeItemBackgroundColor).toEqual('white');
//         expect(firstDrawerNavGroup.props.divider).toBeTruthy();
//         const secondDrawerNavGroup = wrapper.find(DrawerNavGroup).get(1);
//         expect(secondDrawerNavGroup.props.activeItemBackgroundColor).toEqual('black');
//         expect(secondDrawerNavGroup.props.divider).toBeFalsy();
//     });
// });

// describe('DrawerRailItem', () => {
//     it('renders text at full size', () => {
//         const wrapper = mountWithTheme(<DrawerRailItem title={'Test'} itemID={'test'} icon={<></>} />, theme);
//         expect(wrapper.find(Typography).length).toEqual(1);
//     });

//     it('renders no text for condensed', () => {
//         const wrapper = mountWithTheme(<DrawerRailItem condensed title={'Test'} itemID={'test'} icon={<></>} />, theme);
//         expect(wrapper.find(Typography).length).toEqual(0);
//     });
// });
