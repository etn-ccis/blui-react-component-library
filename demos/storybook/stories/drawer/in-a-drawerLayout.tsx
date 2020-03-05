import { Typography } from '@material-ui/core';
import { Apps, FormatListBulleted, Gavel, Help, NotificationsActive, PinDrop, Settings } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import { DrawerLayout } from '@pxblue/react-components';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
// @ts-ignore
import EatonLogo from '../../assets/EatonLogo.svg';

const defaultBody = (
    <DrawerBody>
        <DrawerNavGroup
            activeItem={''}
            items={[
                {
                    title: 'Overview',
                    onClick: action('Overview'),
                    itemID: 'Overview',
                    icon: <Apps />,
                },
                {
                    itemID: 'Timeline',
                    title: 'Timeline',
                    onClick: action('Timeline'),
                    icon: <FormatListBulleted />,
                },
                {
                    itemID: 'Locations',
                    title: 'Locations',
                    onClick: action('Locations'),
                    icon: <PinDrop />,
                },
                {
                    itemID: 'Devices',
                    title: 'Devices',
                    onClick: action('Devices'),
                    icon: <NotificationsActive />,
                },
                {
                    itemID: 'Settings',
                    title: 'Settings',
                    onClick: action('Settings'),
                    icon: <Settings />,
                },
                {
                    itemID: 'Legal',
                    title: 'Legal',
                    onClick: action('Legal'),
                    icon: <Gavel />,
                },
                {
                    itemID: 'Help',
                    title: 'Help',
                    onClick: action('Help'),
                    icon: <Help />,
                },
            ]}
        />
    </DrawerBody>
);

export const inDrawerLayout = (): StoryFnReactReturnType => {
    const open = boolean('Open', true);
    const width = number('Width', 350, {
        range: true,
        min: 200,
        max: 700,
        step: 50,
    });

    return (
        <DrawerLayout
            drawer={
                <Drawer open={open} width={width}>
                    <DrawerHeader
                        icon={<MenuIcon />}
                        titleContent={
                            <div style={{ paddingLeft: '20px', paddingTop: '15px' }}>
                                <Typography variant="subtitle2" style={{ fontWeight: 100 }}>
                                    PX Blue
                                </Typography>
                                <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                    DrawerLayout
                                </Typography>
                            </div>
                        }
                    />
                    {defaultBody}
                    <DrawerFooter>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={EatonLogo}
                                style={{ margin: '10px' }}
                                alt="Eaton Logo"
                                height={50}
                                width={'auto'}
                            />
                        </div>
                    </DrawerFooter>
                </Drawer>
            }
        >
            <div
                style={{
                    backgroundColor: '#b7b7b7',
                    color: 'white',
                    height: '100%',
                    padding: '30px',
                    boxSizing: 'border-box',
                    fontSize: '60px'
                }}
            >
                Body content goes here.
            </div>
        </DrawerLayout>
    );
};

inDrawerLayout.story = { name: 'in a DrawerLayout' };
