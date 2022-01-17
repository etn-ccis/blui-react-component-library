import * as Colors from '@brightlayer-ui/colors';
import { Temp } from '@brightlayer-ui/icons-mui';
import { Hero } from '@brightlayer-ui/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIconColors = (): StoryFnReactReturnType => (
    <Hero
        iconBackgroundColor={color('iconBackgroundColor', Colors.red[500])}
        icon={<Temp fontSize={'inherit'} htmlColor={color('icon.htmlColor', Colors.white[50])} />}
        label={'Temperature'}
        ChannelValueProps={{ units: '°C', value: '38' }}
    />
);

withIconColors.story = { name: 'with icon colors' };
