import React from 'react';
import { action } from '@storybook/addon-actions';
import { GradeA } from '@brightlayer-ui/icons-mui';
import clsx from 'clsx';
import createStyles from '@material-ui/core/styles/createStyles';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { text } from '@storybook/addon-knobs';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';
import useTheme from '@material-ui/core/styles/useTheme';

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
    })
);
export const iconWithLabel = (): StoryFnReactReturnType => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const label = text('label', 'Subtitle');
    const direction = getDirection();
    return (
        <ToolbarMenu
            classes={{ label: classes.labelContent }}
            label={
                <span>
                    <GradeA className={clsx(direction === 'rtl' ? classes.iconMarginLeft : classes.iconMarginRight)} />
                    <span>{label}</span>
                </span>
            }
            menuGroups={menuGroups}
        />
    );
};

iconWithLabel.story = { name: 'icon with label' };
