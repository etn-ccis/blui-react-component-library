import { Typography } from '@material-ui/core';
import {Accessibility, AddAPhoto, NotificationsActive} from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const farmBgImage = require('../../assets/farm.jpg');

type DrawerState = {
    selected: string;
};

const store = new Store<DrawerState>({
    selected: '',
});

const userGuide = 'User Guide';
const accessibility = 'Accessibility';
const notifications = 'Notifications';
const license = 'License';

export const withCustomHeader = (): StoryFnReactReturnType => {
    const open = boolean('Open', true);
    return (
        <State store={store}>
            {(state): JSX.Element[] => [
                <Drawer open={open} key={'drawer'}>
                    <DrawerHeader
                        backgroundImage={farmBgImage}
                        backgroundOpacity={0.5}
                        icon={<MenuIcon />}
                        titleContent={
                            <div style={{ zIndex: 1, paddingLeft: '20px', paddingTop: '15px' }}>
                                <Typography variant="subtitle2">Customizable</Typography>
                                <Typography variant="h6" style={{ marginTop: '-10px' }}>
                                    Header Content Goes Here
                                </Typography>
                            </div>
                        }
                    />
                    <DrawerBody>
                        <DrawerNavGroup
                            title={'Default Navigation Group'}
                            activeItem={state.selected}
                            items={[
                                {
                                    title: userGuide,
                                    itemID: userGuide,
                                    onClick: (): void => {
                                        store.set({ selected: userGuide });
                                    },
                                    icon: <AddAPhoto />,
                                },
                                {
                                    title: license,
                                    itemID: license,
                                    onClick: (): void => {
                                        store.set({ selected: license });
                                    },
                                    icon: <SendIcon />,
                                },
                                {
                                    title: accessibility,
                                    itemID: accessibility,
                                    onClick: (): void => {
                                        store.set({ selected: accessibility });
                                    },
                                    icon: <Accessibility />,
                                },
                                {
                                    title: notifications,
                                    itemID: notifications,
                                    onClick: (): void => {
                                        store.set({ selected: notifications });
                                    },
                                    icon: <NotificationsActive />,
                                },
                            ]}
                        />
                        <div style={{ flex: '1 1 0px' }} />
                    </DrawerBody>
                </Drawer>,
            ]}
        </State>
    );
};

withCustomHeader.story = { name: 'with custom header' };
