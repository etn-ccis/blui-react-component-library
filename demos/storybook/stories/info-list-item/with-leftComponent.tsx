import {Device} from '@pxblue/icons-mui';
import {ChannelValue, InfoListItem} from '@pxblue/react-components';
import {text} from '@storybook/addon-knobs';
import {StoryFnReactReturnType} from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withLeftComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a ChannelValue component to the left'}
        icon={<Device />}
        leftComponent={<ChannelValue value={text('leftComponent.ChannelValue.value', '15')} units={text('leftComponent.ChannelValue.units', 'A')} />}
    />
);

withLeftComponent.story = { name: 'with leftComponent' };
