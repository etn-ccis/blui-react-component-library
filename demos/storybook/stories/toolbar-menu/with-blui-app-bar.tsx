import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { AppBar, Spacer, ThreeLiner, ToolbarMenu } from '@brightlayer-ui/react-components';
import bgImage from '../../assets/farm.jpg';
import { Menu, Work, Settings, Home } from '@material-ui/icons';
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import clsx from 'clsx';
import * as Colors from '@brightlayer-ui/colors';
import { getBodyFiller } from '../../src/utils';
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

const useStyles = makeStyles(() => ({
    title: {},
    subtitle: {},
    info: {},
    liner: {
        top: 0,
        position: 'absolute',
        flexGrow: 1,
        marginLeft: 56,
    },
    linerRTL: {
        marginLeft: 0,
        marginRight: 56,
    },
    expanded: {
        '& $liner': {
            top: 64,
        },
    },
    collapsed: {
        '& $title': {
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        '& $subtitle': {
            display: 'none',
        },
        '& $info': {
            fontSize: '1rem',
            fontWeight: 400,
            marginTop: '-0.25rem',
        },
    },
    toolbarGutters: {
        paddingLeft: 16,
        paddingRight: 4,
    },
    toolbarGuttersRTL: {
        paddingLeft: 4,
        paddingRight: 16,
    },
    toolbarMenuRoot: {
        color: Colors.white[500],
    },
}));

export const withBluiAppBar = (): StoryFnReactReturnType => {
    const classes = useStyles();
    const direction = getDirection();
    const appBarGroupId = 'AppBar';
    const threeLinerGroupId = 'ThreeLiner';
    // AppBar props
    const animationDuration = number('animationDuration', 300, {}, appBarGroupId);
    const showBackgroundImage = boolean('show backgroundImage', true, appBarGroupId);
    const collapsedHeight = number('collapsedHeight', 64, {}, appBarGroupId);
    const expandedHeight = number('expandedHeight', 200, {}, appBarGroupId);
    const scrollThreshold = number('scrollThreshold', 136, {}, appBarGroupId);
    const variant = select('variant', ['snap', 'collapsed', 'expanded'], 'snap', appBarGroupId);
    // ThreeLiner props
    const title = text('title', 'title', threeLinerGroupId);
    const info = text('info', 'info', threeLinerGroupId);

    return (
        <>
            <AppBar
                expandedHeight={expandedHeight}
                collapsedHeight={collapsedHeight}
                scrollThreshold={scrollThreshold}
                animationDuration={animationDuration}
                backgroundImage={showBackgroundImage ? bgImage : undefined}
                variant={variant}
                classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
            >
                <Toolbar
                    classes={{ gutters: direction === 'rtl' ? classes.toolbarGuttersRTL : classes.toolbarGutters }}
                >
                    <IconButton onClick={action('home icon clicked...')} color={'inherit'} edge={'start'}>
                        <Menu />
                    </IconButton>
                    <Spacer />
                    <ThreeLiner
                        classes={{ title: classes.title, subtitle: classes.subtitle, info: classes.info }}
                        className={clsx([classes.liner, direction === 'rtl' ? classes.linerRTL : ''])}
                        title={title}
                        subtitle={
                            <ToolbarMenu
                                classes={{ root: classes.toolbarMenuRoot }}
                                label={text('label', text('label', 'Subtitle'))}
                                menuGroups={menuGroups}
                            ></ToolbarMenu>
                        }
                        info={info}
                        animationDuration={animationDuration}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <IconButton onClick={action('home icon clicked...')} color={'inherit'}>
                            <Home />
                        </IconButton>
                        <IconButton onClick={action('work icon clicked...')} color={'inherit'}>
                            <Work />
                        </IconButton>
                        <IconButton onClick={action('settings icon clicked...')} color={'inherit'}>
                            <Settings />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div>{getBodyFiller()}</div>
        </>
    );
};

withBluiAppBar.story = { name: 'with blui app bar' };
