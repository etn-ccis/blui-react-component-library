import { Typography } from '@material-ui/core';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components/core/Drawer';
import { boolean } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { ListItemTag } from '@pxblue/react-components';
import { useState } from '@storybook/addons';
import { Accessibility, NotificationsActive, Person, Today, Menu } from '@material-ui/icons';

const farmBgImage = require('../../assets/farm.jpg');

export const withCustomHeader = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const navGroupItems: NavItem[] = [
        {
            title: 'Identity Management',
            itemID: '1',
            icon: <Person />,
            onClick: () => setSelected('1'),
        },
        {
            title: 'Calendar',
            itemID: '2',
            icon: <Today />,
            onClick: () => setSelected('2'),
        },
        {
            title: 'Accessibility',
            itemID: '3',
            icon: <Accessibility />,
            onClick: () => setSelected('3'),
        },
        {
            title: 'Notifications',
            itemID: '4',
            icon: <NotificationsActive />,
            onClick: () => setSelected('4'),
        },
    ];

    return (
        <Drawer open={boolean('open', true)} activeItem={selected}>
            <DrawerHeader
                backgroundImage={farmBgImage}
                backgroundOpacity={0.5}
                icon={<Menu />}
                titleContent={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            zIndex: 1,
                            padding: '0 16px',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div>
                            <Typography variant="subtitle2">Customizable</Typography>
                            <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                Header Content
                            </Typography>
                        </div>
                        <ListItemTag style={{ marginBottom: 16 }} label={'v1.0.3'} />
                    </div>
                }
            />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} />
            </DrawerBody>
        </Drawer>
    );
};

withCustomHeader.story = { name: 'with custom header' };
