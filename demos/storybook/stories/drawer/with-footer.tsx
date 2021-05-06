import { Gavel, Menu, Settings } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components/core/Drawer';
import { boolean, color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { addClickEvents, DrawerState, DrawerStoryContext } from './util';
// import { navGroupItems1, navGroupItems2 } from './with-basic-config';
import { useDarkMode } from 'storybook-dark-mode';
import { Typography } from '@material-ui/core';
import EatonFooterLogoLight from '../../assets/EatonLogoLight.png';
import EatonFooterLogoDark from '../../assets/EatonLogoDark.png';
import { useEffect, useState } from '@storybook/addons';
import { State, Store } from '@sambego/storybook-state';



const store: Store<DrawerState> = new Store<DrawerState>({
    selected: '',
});


export const withFooter = (): StoryFnReactReturnType => {
    console.log('rendering');
    console.log(store);
    const [selected, setSelected] = useState('');

    const navGroupItems2: NavItem[] = [
        {
            title: 'Settings',
            itemID: '2-1',
            icon: <Settings />,
            onClick: () => setSelected('2-1')
        },
        {
            title: 'Legal',
            itemID: '2-2',
            icon: <Gavel />,
            onClick: () => setSelected('2-2')
        },
    ];
    return (
        <State store={store}>
            <Drawer open={boolean('open', true)} activeItem={selected}>
                <DrawerHeader icon={<Menu />} title={'Footer Example'} />
                <DrawerBody>
                    <DrawerNavGroup items={navGroupItems2} />
                </DrawerBody>

                <DrawerFooter
                    backgroundColor={color('backgroundColor', Colors.white[50])}
                    hideContentOnCollapse={boolean('hideContentOnCollapse', true)}
                    divider={boolean('divider', true)}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <img
                            src={useDarkMode() ? EatonFooterLogoDark : EatonFooterLogoLight}
                            style={{
                                margin: 16,
                                marginRight: 30,
                                marginLeft: 8,
                            }}
                            alt="Eaton Logo"
                            height={28}
                            width={'auto'}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant={'caption'}>{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                            <Typography variant={'caption'}>All Rights Reserved</Typography>
                        </div>
                    </div>
                </DrawerFooter>
            </Drawer>
        </State>
    )
};

withFooter.story = { name: 'with footer' };
