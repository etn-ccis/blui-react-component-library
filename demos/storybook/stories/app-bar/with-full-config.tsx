import React from 'react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { AppBar, ThreeLiner } from '@pxblue/react-components';
import bgImage from '../../assets/farm.jpg';
import { Menu, Work, Settings, Home } from '@material-ui/icons';
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@pxblue/storybook-rtl-addon';
import { getBodyFiller } from '../../src/utils';

const useStyles = makeStyles(() => ({
    title: {},
    subtitle: {},
    info: {},
    liner: {
        top: 0,
        marginLeft: 32,
        position: 'relative',
        flexGrow: 1,
    },
    expanded: {
        '& $liner': {
            top: 20,
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
    marginLeft12: {
        marginLeft: 12,
    },
    negativeMarginLeft12: {
        marginLeft: -12,
    },
    negativeMarginRight12: {
        marginRight: -12,
    },
    negativeMarginRight20: {
        marginRight: -20,
    },
}));

export const withFullConfig = (): StoryFnReactReturnType => {
    const classes = useStyles();
    const direction = getDirection();
    // AppBar props
    const animationDuration = number('animationDuration', 300);
    const showBackgroundImage = boolean('show backgroundImage', true);
    const collapsedHeight = number('collapsedHeight', 64);
    const expandedHeight = number('expandedHeight', 200);
    const scrollThreshold = number('scrollThreshold', 136);
    const variant = select('variant', ['snap', 'collapsed', 'expanded'], 'snap');
    // ThreeLiner props
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');

    return (
        <div style={{ display: 'block' }}>
            <AppBar
                expandedHeight={expandedHeight}
                collapsedHeight={collapsedHeight}
                scrollThreshold={scrollThreshold}
                animationDuration={animationDuration}
                backgroundImage={showBackgroundImage ? bgImage : undefined}
                variant={variant}
                classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
            >
                <Toolbar>
                    <IconButton
                        onClick={action('home icon clicked...')}
                        color={'inherit'}
                        edge={'start'}
                        className={direction === 'rtl' ? classes.marginLeft12 : classes.negativeMarginRight20}
                    >
                        <Menu />
                    </IconButton>
                    <ThreeLiner
                        classes={{ title: classes.title, subtitle: classes.subtitle, info: classes.info }}
                        className={classes.liner}
                        title={title}
                        subtitle={subtitle}
                        info={info}
                        animationDuration={animationDuration}
                    />
                    <div
                        style={{ display: 'flex', flexDirection: 'row' }}
                        className={direction === 'rtl' ? classes.negativeMarginLeft12 : classes.negativeMarginRight12}
                    >
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
            {getBodyFiller()}
        </div>
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
