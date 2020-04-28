import * as Colors from '@pxblue/colors';
import { InfoListItem, ListItemTag } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { BrightnessMedium } from '@material-ui/icons';

export const inInfoListItem = (): StoryFnReactReturnType => (
    <div style={{ width: '80%', background: Colors.white[50] }}>
        <InfoListItem
            icon={<BrightnessMedium />}
            title={'@pxblue/react-themes'}
            subtitle={'Light and dark themes supported'}
            rightComponent={
                <div style={{ width: 180, display: 'flex', justifyContent: 'space-between' }}>
                    <ListItemTag label={'Build Passing'} backgroundColor={Colors.green['500']} />
                    <ListItemTag label={'5 Bugs'} backgroundColor={Colors.yellow['500']} />
                </div>
            }
        />
    </div>
);

inInfoListItem.story = { name: 'within an Info List Item' };
