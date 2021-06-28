import React from 'react';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { AppBar } from '@pxblue/react-components';
import { Toolbar, Typography } from '@material-ui/core';
import { getBodyFiller } from '../../src/utils';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const expandedHeight = number('expandedHeight', 200);
    const collapsedHeight = number('collapsedHeight', 64);
    const scrollThreshold = number('scrollThreshold', 136);
    return (
        <div style={{ display: 'block', height: '100%', width: '100%' }}>
            <AppBar expandedHeight={expandedHeight} collapsedHeight={collapsedHeight} scrollThreshold={scrollThreshold}>
                <Toolbar>
                    <Typography variant="h6">Title</Typography>
                </Toolbar>
            </AppBar>
            {getBodyFiller()}
        </div>
    );
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
