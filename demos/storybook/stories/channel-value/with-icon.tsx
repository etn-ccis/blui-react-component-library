import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@brightlayer-ui/colors';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getLeftToRightIconTransform } from '../../src/utils';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <ChannelValue
        value={'123'}
        units={'hz'}
        icon={<Trend htmlColor={color('icon.htmlColor', Colors.red[500])} style={getLeftToRightIconTransform()} />}
    />
);

withIcon.story = { name: 'with icon' };
