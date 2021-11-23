import { DropdownToolbar, Spacer } from '@brightlayer-ui/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { text, select, number } from '@storybook/addon-knobs';
import { AppBar, Theme, makeStyles, createStyles, useTheme } from '@material-ui/core';
import { Menu, ArrowBack, Home, Work, Settings } from '@material-ui/icons';
import { action } from '@storybook/addon-actions';
import clsx from 'clsx';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        marginRight24: {
            marginRight: theme.spacing(3),
        },
        cursorPointer: {
            cursor: 'pointer',
        },
        marginLeft24: {
            marginLeft: theme.spacing(3),
        },
        flipIcon: {
            transform: 'scaleX(-1)',
        },
    })
);

export const withFullConfig = (): StoryFnReactReturnType => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const direction = getDirection();
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

    const getIcon = (icon: string): JSX.Element | undefined => {
        switch (icon) {
            case '<Menu />':
                return <Menu onClick={action('menu icon clicked...')} />;
            case '<ArrowBack />':
                return (
                    <ArrowBack
                        onClick={action('back arrow icon clicked...')}
                        className={direction === 'rtl' ? classes.flipIcon : ''}
                    />
                );
            case 'none':
            default:
                return undefined;
        }
    };

    const icons: JSX.Element[] = [
        <Home
            className={clsx(direction === 'rtl' ? '' : '', classes.cursorPointer)}
            onClick={action('home icon clicked...')}
            key={'homeIcon'}
        />,
        <Work
            className={clsx(direction === 'rtl' ? classes.marginRight24 : classes.marginLeft24, classes.cursorPointer)}
            onClick={action('work icon clicked...')}
            key={'workIcon'}
        />,
        <Settings
            className={clsx(direction === 'rtl' ? classes.marginRight24 : classes.marginLeft24, classes.cursorPointer)}
            onClick={action('settings icon clicked...')}
            key={'settingsIcon'}
        />,
    ];

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitle={text('subtitle', 'Subtitle')}
                navigationIcon={getIcon(select('navigationIcon', ['none', '<Menu />', '<ArrowBack />'], '<Menu />'))}
                menuGroups={menuGroups}
            >
                <Spacer />
                {icons.slice(0, number('Number of Icons', 3, { range: true, min: 0, max: 3, step: 1 }))}
            </DropdownToolbar>
        </AppBar>
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
