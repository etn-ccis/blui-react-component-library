import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@brightlayer-ui/colors';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getLeftToRightIconTransform } from '../../src/utils';
import React from 'react';

export const withFontSize = (): StoryFnReactReturnType => (
    <ChannelValue
        value={'123'}
        units={'hz'}
        icon={<Trend htmlColor={Colors.red[500]} style={getLeftToRightIconTransform()} />}
        fontSize={number('fontSize', 30)}
    />
);

withFontSize.story = { name: 'with fontSize' };
