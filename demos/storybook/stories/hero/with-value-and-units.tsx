import { GradeB } from '@brightlayer-ui/icons-mui';
import { Hero } from '@brightlayer-ui/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withValueUnits = (): StoryFnReactReturnType => (
    <Hero icon={<GradeB fontSize={'inherit'} />} label={'Efficiency'} ChannelValueProps={{ units: '%', value: '88' }} />
);

withValueUnits.story = { name: 'with value and units' };
