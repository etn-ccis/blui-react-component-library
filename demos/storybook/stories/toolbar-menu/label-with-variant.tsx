import React from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import Toolbar from '@material-ui/core/Toolbar';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export const labelWithVariant = (): StoryFnReactReturnType => {
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
    const useStyles = makeStyles({
        textContent: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            // set margins to default to avoid the height of the app bar exceeding 56px on mobile
            '&.MuiListItemText-multiline': {
                marginTop: '0.25rem',
                marginBottom: '0.25rem',
            },
        },
        toolbarGutters: {
            padding: `0 16px`,
        },
        root: {
            marginLeft: 20,
        },
    });

    const classes = useStyles();
    const variant = select(
        'variant',
        ['body1', 'body2', 'button', 'caption', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'],
        'h6'
    );
    return (
        <AppBar color={'primary'}>
            <Toolbar classes={{ gutters: classes.toolbarGutters }}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <ToolbarMenu
                    classes={{ root: classes.root }}
                    variant={variant}
                    label={'Click To Open'}
                    menuGroups={menuGroups}
                />
            </Toolbar>
        </AppBar>
    );
};

labelWithVariant.story = { name: 'label with variant' };
