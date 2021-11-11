import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
} from '@brightlayer-ui/react-components/core/Drawer';
import { boolean, number, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import EatonFooterLogoLight from '../../assets/EatonLogoLight.png';
import EatonFooterLogoDark from '../../assets/EatonLogoDark.png';
import { Person, Today, Accessibility, NotificationsActive } from '@material-ui/icons';

export const inDrawerLayout = (): StoryFnReactReturnType => {
    const variant = select('variant', ['permanent', 'persistent', 'temporary', 'rail'], 'persistent');
    const [selected, setSelected] = useState('');
    const isDarkMode = useDarkMode();

    const navGroupItems: NavItem[] = [
        {
            title: 'Identity Management',
            itemID: '1',
            icon: <Person />,
            onClick: (): void => setSelected('1'),
        },
        {
            title: 'Calendar',
            itemID: '2',
            icon: <Today />,
            onClick: (): void => setSelected('2'),
        },
        {
            title: 'Accessibility',
            itemID: '3',
            icon: <Accessibility />,
            onClick: (): void => setSelected('3'),
        },
        {
            title: 'Notifications',
            itemID: '4',
            icon: <NotificationsActive />,
            onClick: (): void => setSelected('4'),
        },
    ];

    return (
        <DrawerLayout
            drawer={
                <Drawer
                    open={boolean('open', true)}
                    width={number('width', 350, {
                        range: true,
                        min: 200,
                        max: 700,
                        step: 50,
                    })}
                    variant={variant}
                    condensed={boolean('condensed (rail only)', false)}
                    ModalProps={{
                        disableEnforceFocus: true,
                    }}
                    activeItem={selected}
                >
                    <DrawerHeader
                        icon={<MenuIcon />}
                        titleContent={
                            <div
                                style={{
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    display: 'flex',
                                    height: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant={'subtitle2'} style={{ fontWeight: 100 }}>
                                    PX Blue
                                </Typography>
                                <Typography variant={'h6'} style={{ marginTop: -8 }}>
                                    DrawerLayout
                                </Typography>
                            </div>
                        }
                    />
                    <DrawerBody>
                        <DrawerNavGroup items={navGroupItems} />
                    </DrawerBody>
                    {variant !== 'rail' && (
                        <DrawerFooter>
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
                                    src={isDarkMode ? EatonFooterLogoDark : EatonFooterLogoLight}
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
                    )}
                </Drawer>
            }
        >
            <div
                style={{
                    backgroundColor: '#777',
                    color: 'white',
                    height: '100%',
                    padding: '30px',
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant={'h2'}>Body content goes here.</Typography>
            </div>
        </DrawerLayout>
    );
};

inDrawerLayout.story = { name: 'within a Drawer Layout' };
