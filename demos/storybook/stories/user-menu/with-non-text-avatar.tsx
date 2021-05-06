import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Pets, Email, ExitToApp, Settings } from '@material-ui/icons';
import { getLeftToRightIconTransform } from '../../src/utils';
const tRex = require('../../assets/trex.jpeg');

export const withNonTextAvatar = (): StoryFnReactReturnType => {
    const tRexAvatar = <Avatar src={tRex} alt={'User Avatar'} />;
    const iconAvatar = (
        <Avatar>
            <Pets />
        </Avatar>
    );
    return (
        <div style={{ display: 'flex', width: '100px', justifyContent: 'space-between' }}>
            <UserMenu
                avatar={tRexAvatar}
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
            <UserMenu
                avatar={iconAvatar}
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
        </div>
    );
};

withNonTextAvatar.story = { name: 'with non-text avatar' };
