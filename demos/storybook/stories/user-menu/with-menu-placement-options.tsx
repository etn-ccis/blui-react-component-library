import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { getMenu } from './with-basic-usage';

export const withMenuPlacementOptions = (): StoryFnReactReturnType => {
    const avatar = <Avatar>CD</Avatar>;
    const anchorOriginHorizontal = select('anchorOrigin.horizontal', ['left', 'center', 'right'], 'left');
    const anchorOriginVertical = select('anchorOrigin.vertical', ['top', 'center', 'bottom'], 'top');
    const transformOriginHorizontal = select('transformOrigin.horizontal', ['left', 'center', 'right'], 'left');
    const transformOriginVertical = select('transformOrigin.vertical', ['top', 'center', 'bottom'], 'top');

    return (
        <UserMenu
            avatar={avatar}
            menuGroups={getMenu()}
            MenuProps={{
                anchorOrigin: { horizontal: anchorOriginHorizontal, vertical: anchorOriginVertical },
                transformOrigin: { horizontal: transformOriginHorizontal, vertical: transformOriginVertical },
            }}
        />
    );
};

withMenuPlacementOptions.story = { name: 'with menu placement options' };
