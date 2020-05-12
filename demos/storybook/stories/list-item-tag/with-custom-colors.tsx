import * as Colors from '@pxblue/colors';
import { ListItemTag } from '@pxblue/react-components';
import { color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withCustomColors = (): StoryFnReactReturnType => (
    <ListItemTag
        label={text('label', 'active')}
        backgroundColor={color('backgroundColor', Colors.yellow['500'])}
        fontColor={color('fontColor', Colors.black['500'])}
    />
);

withCustomColors.story = { name: 'with custom colors' };
