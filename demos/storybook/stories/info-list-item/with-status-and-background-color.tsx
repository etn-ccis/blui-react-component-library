import * as Colors from '@pxblue/colors';
import { Leaf } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { boolean, color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withStatusBackgroundColor = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        statusColor={color('statusColor', Colors.green[500])}
        fontColor={Colors.green[500]}
        icon={<Leaf />}
        backgroundColor={color('backgroundColor', Colors.blue[500])}
    />
);

withStatusBackgroundColor.story = { name: 'with status and background color' };
