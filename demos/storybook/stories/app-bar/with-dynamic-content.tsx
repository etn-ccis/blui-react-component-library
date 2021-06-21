import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { AppBar, ThreeLiner } from '@pxblue/react-components';
import { bodyFiller } from './filler';
import { makeStyles } from '@material-ui/core';

export const withDynamicContent = (): StoryFnReactReturnType => {
    const useStyles = makeStyles({
        title: {},
        subtitle: {},
        info: {},
        liner: {
            top: 0,
            marginLeft: 24,
            position: 'relative',
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
    });

    const classes = useStyles();
    const expandedHeight = number('expandedHeight', 200);
    const collapsedHeight = number('collapsedHeight', 64);
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');
    return (
        <div style={{ display: 'block' }}>
            <AppBar
                expandedHeight={expandedHeight}
                collapsedHeight={collapsedHeight}
                classes={{ collapsed: classes.collapsed, expanded: classes.expanded }}
            >
                <ThreeLiner
                    title={title}
                    subtitle={subtitle}
                    info={info}
                    animationDuration={300}
                    classes={{ title: classes.title, subtitle: classes.subtitle, info: classes.info }}
                    className={classes.liner}
                ></ThreeLiner>
            </AppBar>
            {bodyFiller()}
        </div>
    );
};

withDynamicContent.story = { name: 'with dynamic content' };
