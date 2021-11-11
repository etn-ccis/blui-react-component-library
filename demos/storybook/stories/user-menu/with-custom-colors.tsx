import { Avatar, makeStyles } from '@material-ui/core';
import * as Colors from '@brightlayer-ui/colors';
import { UserMenu } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Email, ExitToApp, Settings } from '@material-ui/icons';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withCustomColors = (): StoryFnReactReturnType => {
    const useStyles = makeStyles({
        root: {
            color: color('fontColor', Colors.white[50], 'Avatar'),
            backgroundColor: color('backgroundColor', Colors.blue[800], 'Avatar'),
        },
        paper: {
            backgroundColor: color('backgroundColor', Colors.white[50], 'Menu'),
        },
    });

    const classes = useStyles();
    const avatar = <Avatar classes={{ root: classes.root }}>CD</Avatar>;

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
                    fontColor: color('menuGroups.fontColor', Colors.black[500], 'Menu'),
                    iconColor: color('menuGroups.iconColor', Colors.black[500], 'Menu'),
                },
            ]}
            MenuProps={{ classes: { paper: classes.paper } }}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withCustomColors.story = { name: 'with custom colors' };
