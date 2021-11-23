import * as Colors from '@brightlayer-ui/colors';
import { InfoListItem, ListItemTag } from '@brightlayer-ui/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { BrightnessMedium } from '@material-ui/icons';
import List from '@material-ui/core/List';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';
import { useTheme } from '@material-ui/core';

export const inInfoListItem = (): StoryFnReactReturnType => {
    const direction = getDirection();
    const theme = useTheme();
    return (
        <List style={{ width: '80%', background: Colors.white[50], padding: 0 }}>
            <InfoListItem
                icon={<BrightnessMedium />}
                title={'@brightlayer-ui/react-themes'}
                subtitle={'Light and dark themes supported'}
                rightComponent={
                    <div style={{ display: 'flex' }}>
                        <ListItemTag
                            label={'Build Passing'}
                            backgroundColor={Colors.green[300]}
                            fontColor={Colors.black[900]}
                            style={{
                                marginRight: direction === 'rtl' ? 0 : theme.spacing(2),
                                marginLeft: direction === 'rtl' ? theme.spacing(2) : 0,
                            }}
                        />
                        <ListItemTag
                            label={'5 Bugs'}
                            backgroundColor={Colors.yellow[500]}
                            fontColor={Colors.black[900]}
                        />
                    </div>
                }
            />
        </List>
    );
};

inInfoListItem.story = { name: 'within an Info List Item' };
