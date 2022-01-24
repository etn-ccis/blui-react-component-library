import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import { text } from '@storybook/addon-knobs';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import * as Colors from '@brightlayer-ui/colors';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { GradeA } from '@brightlayer-ui/icons-mui';
import clsx from 'clsx';

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
        { title: 'Item 1', onClick: action('Item 1 selected') },
        { title: 'Item 2', onClick: action('Item 2 selected') },
        { title: 'Item 3', onClick: action('Item 3 selected') },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            labelContent: {
                '& > span': {
                    display: 'flex',
                },
            },
            iconMarginRight: {
                marginRight: `${theme.spacing(1)}px`,
            },
            iconMarginLeft: {
                marginLeft: `${theme.spacing(1)}px`,
            },
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
                color: Colors.white[500],
            },
        })
    );

    const classes = useStyles();
    const label = text('label', 'Subtitle');
    const direction = getDirection();
    return (
        <AppBar color={'primary'}>
            <Toolbar>
                <ListItemText
                    className={classes.textContent}
                    primary={<Typography variant="h6">Title</Typography>}
                    secondary={
                        <ToolbarMenu
                            classes={{ root: classes.root, label: classes.labelContent }}
                            label={
                                <span>
                                    <GradeA
                                        className={clsx(
                                            direction === 'rtl' ? classes.iconMarginLeft : classes.iconMarginRight
                                        )}
                                    />
                                    <span>{label}</span>
                                </span>
                            }
                            menuGroups={menuGroups}
                            MenuProps={{
                                anchorOrigin: { horizontal: anchorOriginHorizontal, vertical: anchorOriginVertical },
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
