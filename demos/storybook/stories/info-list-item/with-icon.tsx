import * as Colors from '@pxblue/colors';
import { Alarm } from '@material-ui/icons';
import { InfoListItem } from '@pxblue/react-components';
import { color, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withIcon = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Info List Item'}
        subtitle={'with an icon'}
        icon={<Alarm />}
        iconAlign={select('iconAlign', ['left', 'center', 'right'], 'left')}
        iconColor={color('iconColor', Colors.black[500])}
    />
);

withIcon.story = { name: 'with icon' };
