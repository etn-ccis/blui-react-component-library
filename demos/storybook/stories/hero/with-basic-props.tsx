import * as Colors from '@pxblue/colors';
//@ts-ignore
import { GradeA } from '@pxblue/icons-mui';
import { Hero } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicProps = (): StoryFnReactReturnType => (
    <Hero
        icon={<GradeA fontSize={'inherit'} htmlColor={Colors.blue[500]} />}
        label={text('label', 'Efficiency')}
        value={text('value', '94')}
        units={text('units', '%')}
    />
);

withBasicProps.story = { name: 'with basic properties' };
