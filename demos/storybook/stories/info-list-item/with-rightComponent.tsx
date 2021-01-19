import { Device } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withRightComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a ChannelValue component on the right side'}
        icon={<Device />}
        rightComponent={new Date().toLocaleTimeString()}
    />
);

withRightComponent.story = { name: 'with rightComponent' };
