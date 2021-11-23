import { Schedule } from '@material-ui/icons';
import { ChannelValue, Hero } from '@brightlayer-ui/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withChannelValueChildren = (): StoryFnReactReturnType => (
    <Hero label={'Duration'} icon={<Schedule fontSize={'inherit'} />}>
        <ChannelValue fontSize={'large'} value={number('ChannelValue.hours', 1)} units={'h'} />
        <ChannelValue fontSize={'large'} value={number('ChannelValue.minutes', 27)} units={'m'} />
    </Hero>
);

withChannelValueChildren.story = { name: 'with Channel Value children' };
