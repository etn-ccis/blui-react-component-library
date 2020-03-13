import { Avatar, makeStyles } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { UserMenu, UserMenuGroup } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { color, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {WITH_FULL_CONFIG_STORY_NAME} from "../../src/constants";
import { menuGroups } from './with-basic-usage';

export const withFullConfig = (): StoryFnReactReturnType => {
    const useStyles = makeStyles({
        root: {
            color: color('fontColor', Colors.white[50], 'Avatar'),
            backgroundColor: color('backgroundColor', Colors.blue[800], 'Avatar'),
        },
        paper: {
            backgroundColor: color('backgroundColor', Colors.blue[50], 'Menu'),
        },
    });

    const classes = useStyles();
    const avatar = <Avatar classes={{ root: classes.root }}>{text('Avatar.value', 'AB', 'Avatar')}</Avatar>;

    const menuTitle = text('menuTitle', 'Menu Title', 'Menu');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle', 'Menu');

    const group: UserMenuGroup = Object.assign({}, menuGroups[0]);
    group.fontColor = color('menuGroups.fontColor', Colors.gray[500], 'Menu');
    group.iconColor = color('menuGroups.iconColor', Colors.blue[800], 'Menu');
    group.title = text('menuGroups[0].title', 'Account Management', 'Menu');

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
            avatar={avatar}
            menuGroups={[group]}
            menuTitle={menuTitle}
            menuSubtitle={menuSubtitle}
            MenuProps={{
                classes: { paper: classes.paper },
                anchorOrigin: { horizontal: anchorOriginHorizontal, vertical: anchorOriginVertical },
                transformOrigin: { horizontal: transformOriginHorizontal, vertical: transformOriginVertical },
            }}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
