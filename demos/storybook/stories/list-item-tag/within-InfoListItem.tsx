import * as Colors from '@pxblue/colors';
import { InfoListItem, ListItemTag } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { BrightnessMedium } from '@material-ui/icons';
import List from '@material-ui/core/List';

export const inInfoListItem = (): StoryFnReactReturnType => (
    <List style={{ width: '80%', background: Colors.white[50], padding: 0 }}>
        <InfoListItem
            icon={<BrightnessMedium />}
            title={'@pxblue/react-themes'}
            subtitle={'Light and dark themes supported'}
            rightComponent={
                <div>
                    <ListItemTag
                        label={'Build Passing'}
                        backgroundColor={Colors.green[300]}
                        fontColor={Colors.black[900]}
                        style={{ marginRight: 8 }}
                    />
                    <ListItemTag label={'5 Bugs'} backgroundColor={Colors.yellow[500]} fontColor={Colors.black[900]} />
                </div>
            }
        />
    </List>
);

inInfoListItem.story = { name: 'within an Info List Item' };
