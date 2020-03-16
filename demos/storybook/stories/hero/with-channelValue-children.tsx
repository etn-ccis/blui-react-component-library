import { Schedule } from '@material-ui/icons';
import { ChannelValue, Hero } from '@pxblue/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withChannelValueChildren = (): StoryFnReactReturnType => (
    <Hero label={'Duration'} icon={<Schedule fontSize={'inherit'} />}>
        <ChannelValue fontSize={'large'} value={number('ChannelValue.hours', 1)} unit={'h'} />
        <ChannelValue fontSize={'large'} value={number('ChannelValue.minutes', 27)} unit={'m'} />
    </Hero>
);

withChannelValueChildren.story = { name: 'with channelValue children' };
