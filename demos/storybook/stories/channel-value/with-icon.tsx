import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <ChannelValue value={'123'} units={'hz'} icon={<Trend htmlColor={Colors.red[500]} />} />
);

withIcon.story = { name: 'with icon' };
