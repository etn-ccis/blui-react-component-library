import * as Colors from '@pxblue/colors';
import { GradeA } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withAvatar = (): StoryFnReactReturnType => (
    <InfoListItem
        avatar
        title={'Info List Item'}
        subtitle={'with an avatar'}
        statusColor={color('statusColor', Colors.green[700])}
        icon={<GradeA />}
    />
);

withAvatar.story = { name: 'with avatar' };
