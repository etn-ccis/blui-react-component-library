import * as Colors from '@pxblue/colors';
import { Leaf } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBackgroundColor = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a configurable background color'}
        fontColor={Colors.black[500]}
        iconColor={Colors.black[500]}
        icon={<Leaf />}
        backgroundColor={color('backgroundColor', Colors.blue[50])}
    />
);

withBackgroundColor.story = { name: 'with background color' };
