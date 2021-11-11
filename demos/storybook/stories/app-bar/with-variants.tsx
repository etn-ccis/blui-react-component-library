import React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { AppBar } from '@brightlayer-ui/react-components';
import { Toolbar, Typography } from '@material-ui/core';

export const withVariants = (): StoryFnReactReturnType => {
    const expandedHeight = number('expandedHeight', 200);
    const collapsedHeight = number('collapsedHeight', 64);
    const scrollThreshold = number('scrollThreshold', 136);
    const variant = select('variant', ['snap', 'collapsed', 'expanded'], 'snap');

    return (
        <AppBar
            expandedHeight={expandedHeight}
            collapsedHeight={collapsedHeight}
            scrollThreshold={scrollThreshold}
            variant={variant}
        >
            <Toolbar>
                <Typography variant="h6">Title</Typography>
            </Toolbar>
        </AppBar>
    );
};

withVariants.story = { name: 'with variants' };
