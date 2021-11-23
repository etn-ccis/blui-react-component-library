import { Device } from '@brightlayer-ui/icons-mui';
import { ChannelValue, InfoListItem } from '@brightlayer-ui/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withRightComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a ChannelValue component on the right side'}
        icon={<Device />}
        rightComponent={
            <ChannelValue
                value={text('rightComponent.ChannelValue.value', '15')}
                units={text('rightComponent.ChannelValue.units', 'A')}
            />
        }
    />
);

withRightComponent.story = { name: 'with rightComponent' };
