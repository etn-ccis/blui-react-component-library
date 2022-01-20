import React from 'react';
import { text } from '@storybook/addon-knobs';
import { GradeA } from '@brightlayer-ui/icons-mui';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { ToolbarMenu } from '@brightlayer-ui/react-components';

export const iconWithLabel = (): StoryFnReactReturnType => {
    // const label = text('label', 'label');
   
    return <ToolbarMenu label={
        <span>
            <GradeA />
            <span>Dropdown Toolbar</span>
        </span>
    }/>;
};

iconWithLabel.story = { name: WITH_MIN_PROPS_STORY_NAME };
