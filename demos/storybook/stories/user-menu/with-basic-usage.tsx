import React from 'react';
import { Avatar } from '@material-ui/core';
import { Email, ExitToApp, Settings } from '@material-ui/icons';
import { UserMenu } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const value = text('Avatar.value', 'AB');
    const avatar = <Avatar>{value}</Avatar>;
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
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
