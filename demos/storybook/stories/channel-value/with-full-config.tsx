import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { boolean, color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {WITH_FULL_CONFIG_STORY_NAME} from "../../src/constants";

export const withFullConfig = (): StoryFnReactReturnType => (
    <ChannelValue
        value={text('value', text('value', '123'))}
        units={text('units', 'hz')}
        color={color('textColor', Colors.red[500])}
        icon={boolean('Show Icon', true) ? <Trend htmlColor={color('icon.htmlColor', Colors.black[500])} /> : undefined}
        fontSize={number('fontSize', 30)}
        prefix={boolean('prefix', false)}
    />
);

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
