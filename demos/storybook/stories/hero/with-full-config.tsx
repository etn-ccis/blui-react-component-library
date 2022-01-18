import * as Colors from '@brightlayer-ui/colors';
import { Hero } from '@brightlayer-ui/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, color, number, text, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Fan } from '@brightlayer-ui/icons-mui';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withFullConfig = (): StoryFnReactReturnType => (
    <Hero
        label={text('label', 'Velocity')}
        onClick={action('clicked')}
        ChannelValueProps={{
            value: '470',
            units: 'RPM',
            icon: boolean('Show Value Icon', true) ? (
                <TrendingUpIcon style={getLeftToRightIconTransform()} />
            ) : undefined,
            unitSpace: select('unitSpace', ['show', 'hide', 'auto'], 'hide'),
            fontSize: select('fontSize', ['normal', 'small'], 'normal'),
        }}
        iconBackgroundColor={color('iconBackgroundColor', Colors.blue[500])}
        icon={<Fan fontSize={'inherit'} htmlColor={color('icon.htmlColor', Colors.white[50])} />}
        iconSize={number('iconSize', 35)}
    />
);

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
