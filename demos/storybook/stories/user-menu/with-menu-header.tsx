import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Email, ExitToApp, Settings } from '@material-ui/icons';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withMenuHeader = (): StoryFnReactReturnType => {
    const avatar = <Avatar>EM</Avatar>;
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return (
        <UserMenu
            avatar={avatar}
            menuGroups={[
                {
                    items: [
                        {
                            title: 'Settings',
                            icon: <Settings />,
                            onClick: action("click 'Settings'"),
                        },
                        {
                            title: 'Contact Us',
                            icon: <Email />,
                            onClick: action("click 'Contact Us'"),
                        },
                        {
                            title: 'Log Out',
                            icon: <ExitToApp style={getLeftToRightIconTransform()} />,
                            onClick: action("click 'Log Out'"),
                        },
                    ],
                },
            ]}
            menuTitle={menuTitle}
            menuSubtitle={menuSubtitle}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withMenuHeader.story = { name: 'with a menu header' };
