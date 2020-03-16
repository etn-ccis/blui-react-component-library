import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { ChannelValue } from '@pxblue/react-components';
import { boolean, color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';

export const withFullConfig = (): StoryFnReactReturnType => {
    const value = text('value', '123');
    const units = text('units', 'hz');
    const textColor = color('color', Colors.red[500]);
    const iconColor = color('icon.htmlColor', Colors.black[500]);
    const icon = boolean('Show Icon', true) ? <Trend htmlColor={iconColor} /> : undefined;
    const fontSize = number('fontSize', 30);
    const prefix = boolean('prefix', false);

    return <ChannelValue value={value} units={units} color={textColor} icon={icon} fontSize={fontSize} prefix={prefix} />;
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
