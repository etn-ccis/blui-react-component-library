import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { boolean, color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withAllProps = (): StoryFnReactReturnType => (
    <ChannelValue
        value={text('value', text('value', '123'))}
        units={text('units', 'hz')}
        color={color('textColor', Colors.red[500])}
        icon={<Trend htmlColor={Colors.red[500]} />}
        fontSize={number('font size', 30)}
        prefix={boolean('prefix', false)}
    />
);

withAllProps.story = { name: 'with all props' };
