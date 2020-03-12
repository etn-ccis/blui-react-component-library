import { InfoListItem } from '@pxblue/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicUsage = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
    />
);

withBasicUsage.story = { name: 'with basic usage' };
