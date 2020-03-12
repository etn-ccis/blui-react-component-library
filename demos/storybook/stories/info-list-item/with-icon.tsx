import * as Colors from '@pxblue/colors';
import { Leaf } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with an icon'}
        icon={<Leaf />}
        iconColor={color('iconColor', Colors.green[500])}
    />
);

withIcon.story = { name: 'with icon' };
