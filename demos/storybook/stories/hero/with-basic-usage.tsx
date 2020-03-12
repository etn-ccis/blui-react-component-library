import {GradeA} from '@pxblue/icons-mui';
import {Hero} from '@pxblue/react-components';
import {text} from '@storybook/addon-knobs';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicUsage = (): StoryFnReactReturnType => (
    <Hero
        icon={<GradeA fontSize={'inherit'} />}
        label={text('label', 'Efficiency')}
    />
);

withBasicUsage.story = { name: 'with basic usage' };
