import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { AppBar, Spacer, ThreeLiner } from '@pxblue/react-components';
import bgImage from '../../assets/farm.jpg';
import { Menu, Work, Settings, Home } from '@material-ui/icons';
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@pxblue/storybook-rtl-addon';
import clsx from 'clsx';

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
            fontSize: 0,
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
}));

export const withFullConfig = (): StoryFnReactReturnType => {
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
    const subtitle = text('subtitle', 'subtitle', threeLinerGroupId);
    const info = text('info', 'info', threeLinerGroupId);

    return (
        <AppBar
            expandedHeight={expandedHeight}
            collapsedHeight={collapsedHeight}
            scrollThreshold={scrollThreshold}
            animationDuration={animationDuration}
            backgroundImage={showBackgroundImage ? bgImage : undefined}
            variant={variant}
            classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
        >
            <Toolbar classes={{ gutters: direction === 'rtl' ? classes.toolbarGuttersRTL : classes.toolbarGutters }}>
                <IconButton onClick={action('home icon clicked...')} color={'inherit'} edge={'start'}>
                    <Menu />
                </IconButton>
                <Spacer />
                <ThreeLiner
                    classes={{ title: classes.title, subtitle: classes.subtitle, info: classes.info }}
                    className={clsx([classes.liner, direction === 'rtl' ? classes.linerRTL : ''])}
                    title={title}
                    subtitle={subtitle}
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
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
