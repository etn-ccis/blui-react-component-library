import * as Colors from '@brightlayer-ui/colors';
import { ListItemTag } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';

export const withFullConfig = (): StoryFnReactReturnType => (
    <ListItemTag
        label={text('label', 'clickable')}
        backgroundColor={color('backgroundColor', Colors.blue[500])}
        fontColor={color('fontColor', Colors.white[50])}
        onClick={action('ListItemTag: onClick')}
        style={{
            padding: text('style.padding', '0 4px'),
            width: text('style.width', 'initial'),
            boxSizing: 'border-box',
        }}
        paragraph={boolean('paragraph', false)}
        noWrap={boolean('noWrap', true)}
    />
);

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
