import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import {color} from "@storybook/addon-knobs";
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <ChannelValue value={'123'} units={'hz'} icon={<Trend htmlColor={color('icon.htmlColor', Colors.red[500])} />} />
);

withIcon.story = { name: 'with icon' };
