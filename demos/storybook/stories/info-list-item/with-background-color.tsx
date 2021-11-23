import * as Colors from '@brightlayer-ui/colors';
import { Leaf } from '@brightlayer-ui/icons-mui';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBackgroundColor = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with a configurable background color'}
        fontColor={Colors.white[50]}
        iconColor={Colors.white[50]}
        icon={<Leaf />}
        backgroundColor={color('backgroundColor', Colors.blue[500])}
    />
);

withBackgroundColor.story = { name: 'with background color' };
