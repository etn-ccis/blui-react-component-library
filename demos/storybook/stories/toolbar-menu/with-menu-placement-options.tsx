import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { GradeA } from '@brightlayer-ui/icons-mui';
import { useDarkMode } from 'storybook-dark-mode';
import * as Colors from '@brightlayer-ui/colors';

export const withMenuPlacementOptions = (): StoryFnReactReturnType => {
    const anchorOriginHorizontal = select(
        'menuProps.anchorOrigin.horizontal',
        ['left', 'center', 'right'],
        'left',
        'Menu'
    );
    const anchorOriginVertical = select(
        'menuProps.anchorOrigin.vertical',
        ['top', 'center', 'bottom'],
        'bottom',
        'Menu'
    );
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
        { title: 'Menu Item 1', onClick: action('Item 1 selected') },
        { title: 'Menu Item 2', onClick: action('Item 2 selected') },
        { title: 'Menu Item 3', onClick: action('Item 3 selected') },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];
    const isDarkMode = useDarkMode();
    const useStyles = makeStyles(() =>
        createStyles({
            textContent: {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                // set margins to default to avoid the height of the app bar exceeding 56px on mobile
                '&.MuiListItemText-multiline': {
                    marginTop: '0.25rem',
                    marginBottom: '0.25rem',
                },
            },
            root: {
                marginTop: '-0.25rem',
                color: isDarkMode ? Colors.black[50] : Colors.white[50],
            },
        })
    );

    const classes = useStyles();
    const label = text('label', 'Subtitle');
    return (
        <AppBar color={'primary'}>
            <Toolbar>
                <ListItemText
                    className={classes.textContent}
                    primary={<Typography variant="h6">Title</Typography>}
                    secondary={
                        <ToolbarMenu
                            classes={{ root: classes.root }}
                            icon={<GradeA />}
                            label={label}
                            menuGroups={menuGroups}
                            MenuProps={{
                                anchorOrigin: {
                                    horizontal: anchorOriginHorizontal,
                                    vertical: anchorOriginVertical,
                                },
                                transformOrigin: {
                                    horizontal: transformOriginHorizontal,
                                    vertical: transformOriginVertical,
                                },
                            }}
                        ></ToolbarMenu>
                    }
                />
            </Toolbar>
        </AppBar>
    );
};

withMenuPlacementOptions.story = { name: 'with menu placement options' };
