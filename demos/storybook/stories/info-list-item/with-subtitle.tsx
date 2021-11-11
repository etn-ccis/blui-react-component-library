import { InfoListItem } from '@brightlayer-ui/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withSubtitle = (): StoryFnReactReturnType => (
    <InfoListItem
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'this is a subtitle within an InfoListItem')}
    />
);

withSubtitle.story = { name: 'with subtitle' };
