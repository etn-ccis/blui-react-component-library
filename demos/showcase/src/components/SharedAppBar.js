import { AppBar, Hidden, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Email, Menu, Settings, InvertColors } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { store } from '../store';

import { Spacer, UserMenu } from '@pxblue/react-components';

export const SharedAppBar = (props) => {
    const { onClick } = props;
    const theme = useTheme();

    return (
        <AppBar position={'sticky'} color={'primary'}>
            <Toolbar style={{ padding: `0 ${theme.spacing(2)}px` }}>
                <Hidden smUp>
                    <Menu style={{ marginRight: theme.spacing(4) }} onClick={onClick} />
                </Hidden>
                <Typography variant={'h6'}>Showcase</Typography>
                <Spacer flex={1} />
                <IconButton
                    color={'inherit'}
                    onClick={() => {
                        store.dispatch({ type: 'toggle' });
                    }}
                >
                    <InvertColors />
                </IconButton>
                <Spacer width={theme.spacing(1)} flex={0} />
                <UserMenu
                    avatar={<Avatar>MS</Avatar>}
                    menuTitle={'Marshall Sutter'}
                    menuSubtitle={'msutter@acmesteel.com'}
                    menuGroups={[
                        {
                            items: [
                                {
                                    title: 'Log Out',
                                    itemID: 'Log Out',
                                    icon: <SendIcon />,
                                },
                                {
                                    title: 'Account Settings',
                                    itemID: 'Account Settings',
                                    icon: <Settings />,
                                    divider: true,
                                },
                            ],
                        },
                        {
                            title: 'Contact Us',
                            items: [
                                {
                                    title: 'eatonhelp@eaton.com',
                                    itemID: 'email',
                                    icon: <SendIcon />,
                                },
                                {
                                    title: '1-866-905-9988',
                                    itemID: 'phone',
                                    icon: <Email />,
                                },
                            ],
                        },
                    ]}
                />
            </Toolbar>
        </AppBar>
    );
};
