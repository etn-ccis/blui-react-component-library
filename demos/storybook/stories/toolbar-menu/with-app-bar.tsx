import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ToolbarMenu } from '@brightlayer-ui/react-components';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { action } from '@storybook/addon-actions';
import makeStyles from '@material-ui/core/styles/makeStyles';
import * as Colors from '@brightlayer-ui/colors';
import { text } from '@storybook/addon-knobs';
export const withAppBar = (): StoryFnReactReturnType => {
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
        labelContent: {
            display: 'flex',
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
    });

    const classes = useStyles();
    return (
        <AppBar color={'primary'}>
            <Toolbar>
                <ListItemText
                    className={classes.textContent}
                    primary={<Typography variant="h6">Title</Typography>}
                    secondary={
                        <ToolbarMenu
                            classes={{ root: classes.root }}
                            label={text('label', text('label', 'Subtitle'))}
                            menuGroups={menuGroups}
                        ></ToolbarMenu>
                    }
                />
            </Toolbar>
        </AppBar>
    );
};

withAppBar.story = { name: 'with app bar' };
