import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Email, ExitToApp, Settings } from '@material-ui/icons';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withMenuPlacementOptions = (): StoryFnReactReturnType => {
    const anchorOriginHorizontal = select(
        'MenuProps.anchorOrigin.horizontal',
        ['left', 'center', 'right'],
        'left',
        'Menu'
    );
    const anchorOriginVertical = select('MenuProps.anchorOrigin.vertical', ['top', 'center', 'bottom'], 'top', 'Menu');
    const transformOriginHorizontal = select(
        'MenuProps.transformOrigin.horizontal',
        ['left', 'center', 'right'],
        'left',
        'Menu'
    );
    const transformOriginVertical = select(
        'MenuProps.transformOrigin.vertical',
        ['top', 'center', 'bottom'],
        'top',
        'Menu'
    );

    return (
        <UserMenu
            avatar={<Avatar>CD</Avatar>}
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
            MenuProps={{
                anchorOrigin: { horizontal: anchorOriginHorizontal, vertical: anchorOriginVertical },
                transformOrigin: { horizontal: transformOriginHorizontal, vertical: transformOriginVertical },
            }}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withMenuPlacementOptions.story = { name: 'with menu placement options' };
