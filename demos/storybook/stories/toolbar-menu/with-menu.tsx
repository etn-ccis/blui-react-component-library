import React from 'react';
import { GradeA } from '@brightlayer-ui/icons-mui';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { AppBar,} from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { text, } from '@storybook/addon-knobs';
export const withMenu = (): StoryFnReactReturnType => {
    const menuItems = [
        { title: 'Item 1', onClick: action('Item 1 selected') },
        { title: 'Item 2', onClick: action('Item 2 selected') },
        { title: 'Item 3', onClick: action('Item 3 selected') },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];
    return (
        // <AppBar color={'primary'}>
            <ToolbarMenu
                label={<span>
                    <GradeA/>
                   <span>Dropdown Toolbar</span>
                </span>}
                menuGroups={menuGroups}
            >
            </ToolbarMenu>
        // </AppBar>
    );
};

withMenu.story = { name: 'with menu' };