import { DropdownToolbar } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { AppBar } from '@material-ui/core';

export const withMenuPlacementOptions = (): StoryFnReactReturnType => {
    const anchorOriginHorizontal = select(
        'menuProps.anchorOrigin.horizontal',
        ['left', 'center', 'right'],
        'left',
        'Menu'
    );
    const anchorOriginVertical = select('menuProps.anchorOrigin.vertical', ['top', 'center', 'bottom'], 'top', 'Menu');
    const transformOriginHorizontal = select(
        'menuProps.transformOrigin.horizontal',
        ['left', 'center', 'right'],
        'left',
        'Menu'
    );
    const transformOriginVertical = select(
        'menuProps.transformOrigin.vertical',
        ['top', 'center', 'bottom'],
        'top',
        'Menu'
    );

    const menuItems = [
        { title: 'Item 1', onClick: action('Item 1 selected'), itemID: 'item1' },
        { title: 'Item 2', onClick: action('Item 2 selected'), itemID: 'item2' },
        { title: 'Item 3', onClick: action('Item 3 selected'), itemID: 'item3' },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={'Title'}
                subtitle={'Subtitle'}
                menuGroups={menuGroups}
                MenuProps={{
                    anchorOrigin: { horizontal: anchorOriginHorizontal, vertical: anchorOriginVertical },
                    transformOrigin: { horizontal: transformOriginHorizontal, vertical: transformOriginVertical },
                }}
            />
        </AppBar>
    );
};

withMenuPlacementOptions.story = { name: 'with menu placement options' };
