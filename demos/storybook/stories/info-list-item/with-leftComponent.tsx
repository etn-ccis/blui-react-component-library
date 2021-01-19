import { Device } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withLeftComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a ChannelValue component to the left'}
        icon={<Device />}
        leftComponent={new Date().toLocaleTimeString()}
    />
);

withLeftComponent.story = { name: 'with leftComponent' };
