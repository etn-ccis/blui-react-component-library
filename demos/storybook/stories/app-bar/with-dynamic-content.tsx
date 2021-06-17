import React from 'react';
import {number, text} from '@storybook/addon-knobs';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import {AppBar, ThreeLiner} from '@pxblue/react-components';
import {bodyFiller} from "./filler";

export const withDynamicContent = (): StoryFnReactReturnType => {
    const expandedHeight = number('expandedHeight', 200);
    const collapsedHeight = number('collapsedHeight', 64);
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');
    return (
        <div style={{display: 'block'}}>
            <AppBar expandedHeight={expandedHeight} collapsedHeight={collapsedHeight}>
                <ThreeLiner title={title} subtitle={subtitle} info={info}></ThreeLiner>
            </AppBar>
            {bodyFiller()}
        </div>

    );
};

withDynamicContent.story = { name: 'with dynamic content' };
