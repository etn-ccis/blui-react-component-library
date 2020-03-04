import * as Colors from '@pxblue/colors';
//@ts-ignore
import { Leaf } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { boolean, color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        icon={<Leaf />}
        iconColor={color('iconColor', Colors.green[500])}
        divider={boolean('divider', true) ? 'full' : undefined}
    />
);

withIcon.story = { name: 'with name' };
