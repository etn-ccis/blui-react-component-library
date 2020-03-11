import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { UserMenu } from '@pxblue/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getMenu } from './with-basic-usage';

export const withCustomColors = (): StoryFnReactReturnType => {
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
    const avatar = <Avatar classes={{ root: classes.root }}>CD</Avatar>;
    const items = getMenu()[0];
    items.fontColor = color('fontColor', Colors.gray[500], 'Menu');
    items.iconColor = color('iconColor', Colors.blue[800], 'Menu');

    return <UserMenu avatar={avatar} menuGroups={[items]} MenuProps={{ classes: { paper: classes.paper } }} />;
};

withCustomColors.story = { name: 'with custom colors' };
