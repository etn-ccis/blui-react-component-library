import React from 'react';
import {number} from '@storybook/addon-knobs';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import {WITH_MIN_PROPS_STORY_NAME} from '../../src/constants';
import {AppBar} from '@pxblue/react-components';
import {bodyFiller} from "./filler";

export const withBasicUsage = (): StoryFnReactReturnType => {
    const expandedHeight = number('expandedHeight', 200);
    const collapsedHeight = number('collapsedHeight', 64);
    return (
        <div style={{display: 'block'}}>
            <AppBar expandedHeight={expandedHeight} collapsedHeight={collapsedHeight}>
                <div>Title</div>
            </AppBar>
            {bodyFiller()}
        </div>

    );
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
