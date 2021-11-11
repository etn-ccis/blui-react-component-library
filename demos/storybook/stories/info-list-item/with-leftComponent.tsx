import { Device } from '@brightlayer-ui/icons-mui';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

import React from 'react';

export const withLeftComponent = (): StoryFnReactReturnType => {
    const dir = getDirection();

    return (
        <InfoListItem
            title={'Info List Item'}
            subtitle={'with a timestamp as a left component'}
            icon={<Device />}
            leftComponent={
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: dir === 'ltr' ? 16 : 0,
                        marginLeft: dir === 'rtl' ? 16 : 0,
                    }}
                >
                    <div>
                        8:32 <strong>AM</strong>
                    </div>
                    <div>11/21/21</div>
                </div>
            }
        />
    );
};

withLeftComponent.story = { name: 'with leftComponent' };
