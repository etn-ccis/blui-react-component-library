import { Avatar } from '@material-ui/core';
import { UserMenu } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { menuGroups } from './with-basic-usage';

export const withMenuHeader = (): StoryFnReactReturnType => {
    const avatar = <Avatar>EM</Avatar>;
    const menuTitle = text('menuTitle', 'Menu Title');
    const menuSubtitle = text('menuSubtitle', 'Menu Subtitle');
    return (
        <UserMenu
            avatar={avatar}
            menuGroups={menuGroups}
            menuTitle={menuTitle}
            menuSubtitle={menuSubtitle}
            onOpen={action('open')}
            onClose={action('close')}
        />
    );
};

withMenuHeader.story = { name: 'with a menu header' };
