import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';
import { ArrowBack, Menu } from '@material-ui/icons';
import { action } from '@storybook/addon-actions';

export const withNavIcon = (): StoryFnReactReturnType => {
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

    const getIcon = (icon: string): JSX.Element | undefined => {
        switch (icon) {
            case '<Menu />':
                return <Menu />;
            case '<ArrowBack />':
                return <ArrowBack />;
            case 'none':
            default:
                return undefined;
        }
    };

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitle={text('subtitle', 'Subtitle')}
                navigationIcon={getIcon(select('navigationIcon', ['none', '<Menu />', '<ArrowBack />'], '<Menu />'))}
                menuGroups={menuGroups}
            ></DropdownToolbar>
        </AppBar>
    );
};

withNavIcon.story = { name: 'with nav icon' };
