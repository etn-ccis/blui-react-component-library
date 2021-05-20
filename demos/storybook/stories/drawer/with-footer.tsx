import { Gavel, Menu, Settings } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
} from '@pxblue/react-components/core/Drawer';
import { boolean, color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { Typography } from '@material-ui/core';
import EatonFooterLogoLight from '../../assets/EatonLogoLight.png';
import EatonFooterLogoDark from '../../assets/EatonLogoDark.png';

export const withFooter = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const navGroupItems: NavItem[] = [
        {
            title: 'Settings',
            itemID: '1',
            icon: <Settings />,
            onClick: (): void => setSelected('1'),
        },
        {
            title: 'Legal',
            itemID: '2',
            icon: <Gavel />,
            onClick: (): void => setSelected('2'),
        },
    ];

    return (
        <Drawer open={boolean('open', true)} activeItem={selected}>
            <DrawerHeader icon={<Menu />} title={'Footer Example'} />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} />
            </DrawerBody>

            <DrawerFooter
                backgroundColor={color('backgroundColor', Colors.white[50])}
                hideContentOnCollapse={boolean('hideContentOnCollapse', true)}
                divider={boolean('divider', true)}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        padding: 16,
                    }}
                >
                    <img
                        src={useDarkMode() ? EatonFooterLogoDark : EatonFooterLogoLight}
                        alt="Eaton Logo"
                        height={28}
                        width={'auto'}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography
                            variant={'caption'}
                        >{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                        <Typography variant={'caption'}>All Rights Reserved</Typography>
                    </div>
                </div>
            </DrawerFooter>
        </Drawer>
    );
};

withFooter.story = { name: 'with footer' };
