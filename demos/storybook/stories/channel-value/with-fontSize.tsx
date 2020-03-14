import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withFontSize = (): StoryFnReactReturnType => (
    <ChannelValue
        value={'123'}
        units={'hz'}
        icon={<Trend htmlColor={Colors.red[500]} />}
        fontSize={number('fontSize', 30)}
    />
);

withFontSize.story = { name: 'with fontSize' };
