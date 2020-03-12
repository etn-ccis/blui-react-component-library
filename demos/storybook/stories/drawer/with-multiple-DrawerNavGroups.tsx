import {AddAPhoto, AirportShuttle, Dashboard, Devices, Menu, PinDrop, Toc} from '@material-ui/icons';
import * as Colors from "@pxblue/colors";
import {NavItem, Spacer} from "@pxblue/react-components";
import {Drawer, DrawerBody, DrawerHeader, DrawerNavGroup} from '@pxblue/react-components/core/Drawer';
import {boolean, text} from '@storybook/addon-knobs';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {DrawerStoryContext} from './util';
import {navGroupItems1} from './with-basic-config';

export const navGroupItems2: NavItem[] = [
   {
      title: 'Overview',
      itemID: 'group2-1',
      icon: <Dashboard />,
   },
   {
      title: 'Timeline',
      itemID: 'group2-2',
      icon: <Toc />,
   },
   {
      title: 'Locations',
      itemID: 'group2-3',
      icon: <PinDrop />,
   },
   {
      title: 'Devices',
      subtitle: '5 new warnings',
      statusColor: Colors.yellow[500],
      itemID: 'group2-4',
      icon: <Devices />,
   },
   {
      title: 'Photos',
      itemID: 'group2-5',
      icon: <AddAPhoto />,
   },
   {
      title: 'Schedule',
      itemID: 'group2-6',
      icon: <AirportShuttle />,
   }
];

export const withMultipleNavGroups = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)}>
        <DrawerHeader icon={<Menu />} title={'PX Blue Drawer'} subtitle={'with multiple navigation groups'}/>
        <DrawerBody>
            <DrawerNavGroup
                title={text('title1', 'First DrawerNavGroup')}
                activeItem={context.state.selected}
                items={navGroupItems1}
            />
           {boolean('Add Spacer', false) && <Spacer />}
           <DrawerNavGroup
              title={text('title2', 'Second DrawerNavGroup')}
              activeItem={context.state.selected}
              items={navGroupItems2}
           />
        </DrawerBody>
    </Drawer>
);

withMultipleNavGroups.story = { name: 'with multiple DrawerNavGroups' };
