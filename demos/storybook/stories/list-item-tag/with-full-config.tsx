import * as Colors from '@pxblue/colors';
import { ListItemTag } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';

export const withFullConfig = (): StoryFnReactReturnType => (
    <ListItemTag
        label={text('label', 'clickable')}
        backgroundColor={color('backgroundColor', Colors.green['700'])}
        fontColor={color('fontColor', Colors.white['100'])}
        onClick={action('ListItemTag: onClick')}
        variant={select(
            'variant',
            [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'subtitle1',
                'subtitle2',
                'body1',
                'body2',
                'caption',
                'button',
                'overline',
                'srOnly',
                'inherit',
            ],
            'overline'
        )}
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
