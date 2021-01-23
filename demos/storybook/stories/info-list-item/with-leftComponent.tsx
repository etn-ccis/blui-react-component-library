import { Device } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withLeftComponent = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a ChannelValue component to the left'}
        icon={<Device />}
        leftComponent={
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: 16 }}>
                <div>
                    8:32 <strong>AM</strong>
                </div>
                <div>11/21/21</div>
            </div>
        }
    />
);

withLeftComponent.story = { name: 'with leftComponent' };
