import { Avatar } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { menuGroups } from './with-basic-usage';

export const withMenuPlacementOptions = (): StoryFnReactReturnType => {
    const anchorOriginHorizontal = select('anchorOrigin.horizontal', ['left', 'center', 'right'], 'left');
    const anchorOriginVertical = select('anchorOrigin.vertical', ['top', 'center', 'bottom'], 'top');
    const transformOriginHorizontal = select('transformOrigin.horizontal', ['left', 'center', 'right'], 'left');
    const transformOriginVertical = select('transformOrigin.vertical', ['top', 'center', 'bottom'], 'top');

    return (
        <UserMenu
            avatar={<Avatar>CD</Avatar>}
            menuGroups={menuGroups}
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
