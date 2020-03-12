import { Device } from '@pxblue/icons-mui';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withCustomLeftComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('title', 'Test')}
        divider={boolean('divider', true) ? 'full' : undefined}
        hidePadding={boolean('hidePadding', true)}
        icon={<Device />}
        leftComponent={<ChannelValue value={text('value', '15')} units={text('units', 'A')} />}
    />
);

withCustomLeftComponent.story = { name: 'with custom leftComponent' };
