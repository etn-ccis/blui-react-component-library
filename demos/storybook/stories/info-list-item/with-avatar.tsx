import * as Colors from '@pxblue/colors';
import { GradeA } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withAvatar = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('title', 'Info List Item')}
        subtitle={text('subtitle', 'A simple demo')}
        avatar
        statusColor={color('statusColor', Colors.green[500])}
        icon={<GradeA />}
    />
);

withAvatar.story = { name: 'with avatar' };
