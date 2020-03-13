import { GradeB } from '@pxblue/icons-mui';
import { Hero } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withValueUnits = (): StoryFnReactReturnType => (
    <Hero
        icon={<GradeB fontSize={'inherit'} />}
        label={'Efficiency'}
        value={text('value', '88')}
        units={text('units', '%')}
    />
);

withValueUnits.story = { name: 'with value and units' };
