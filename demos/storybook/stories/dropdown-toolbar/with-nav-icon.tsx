import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import * as Colors from '@pxblue/colors';
import { AppBar } from '@material-ui/core';
import { ArrowBack, Menu } from '@material-ui/icons';
import { HandlerFunction, action } from '@storybook/addon-actions';

export const withNavIcon = (): StoryFnReactReturnType => {
    const menuItems = [
        { label: 'English', onClick: (): HandlerFunction => action('English selected') },
        { label: 'Arabic', onClick: (): HandlerFunction => action('Arabic selected') },
        { label: 'French', onClick: (): HandlerFunction => action('French selected') },
    ];

    const getIcon = (icon: string): JSX.Element | undefined => {
        switch (icon) {
            case '<Menu />':
                return <Menu />;
            case '<ArrowBack />':
                return <ArrowBack />;
            case 'undefined':
            default:
                return undefined;
        }
    };

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                style={{ width: '80%', backgroundColor: Colors.blue[500], color: Colors.white[50] }}
                title={text('title', 'Title')}
                subtitleLabel={text('subtitleLabel', 'Subtitle')}
                navigationIcon={getIcon(
                    select('navigationIcon', ['undefined', '<Menu />', '<ArrowBack />'], '<Menu />')
                )}
                menuItems={menuItems}
            ></DropdownToolbar>
        </AppBar>
    );
};

withNavIcon.story = { name: 'with nav icon' };
