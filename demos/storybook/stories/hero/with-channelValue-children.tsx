import * as Colors from '@pxblue/colors';
//@ts-ignore
import { Leaf } from '@pxblue/icons-mui';
import { ChannelValue, Hero } from '@pxblue/react-components';

import { number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withChannelValueChildren = (): StoryFnReactReturnType => (
    <Hero label={text('label', 'Duration')} icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]} />}>
        <ChannelValue fontSize={'large'} value={number('hours', 1)} units={'h'} />
        <ChannelValue fontSize={'large'} value={number('minutes', 27)} units={'m'} />
    </Hero>
);

withChannelValueChildren.story = { name: 'with channelValue children' };
