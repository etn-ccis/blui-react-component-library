import React from 'react';
import { action } from '@storybook/addon-actions';
import AppBar from '@material-ui/core/AppBar';
import { text } from '@storybook/addon-knobs';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import Toolbar from '@material-ui/core/Toolbar';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';
import Typography from '@material-ui/core/Typography';
// import * as Colors from '@brightlayer-ui/colors';

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
                        />
                    }
                ></ListItemText>
            </Toolbar>
        </AppBar>
    );
};

withAppBar.story = { name: 'with app bar' };
