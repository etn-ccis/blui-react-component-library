import { Avatar, makeStyles } from '@material-ui/core';
import * as Colors from '@brightlayer-ui/colors';
import { UserMenu, UserMenuGroup } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { menuGroups } from './with-basic-usage';

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
    const group: UserMenuGroup = Object.assign({}, menuGroups[0]);
    group.fontColor = color('menuGroups.fontColor', Colors.purple[500], 'Menu');
    group.iconColor = color('menuGroups.iconColor', Colors.blue[800], 'Menu');

    return (
        <UserMenu
            avatar={avatar}
            menuGroups={[group]}
            MenuProps={{ classes: { paper: classes.paper } }}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withCustomColors.story = { name: 'with custom colors' };
