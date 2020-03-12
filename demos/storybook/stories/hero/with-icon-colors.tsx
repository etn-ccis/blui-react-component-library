import * as Colors from '@pxblue/colors';
import { Temp } from '@pxblue/icons-mui';
import { Hero } from '@pxblue/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIconColors = (): StoryFnReactReturnType => (
    <Hero
        iconBackgroundColor={color('iconBackgroundColor', Colors.red[500])}
        icon={<Temp fontSize={'inherit'} htmlColor={color('icon.htmlColor', Colors.white[500])} />}
        label={'Temperature'}
        value={'38'}
        units={'c'}
    />
);

withIconColors.story = { name: 'with icon colors' };
