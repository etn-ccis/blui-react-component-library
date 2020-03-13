import { Leaf, Temp } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withArrayForSubtitles = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Temperature'}
        subtitle={['4', <Leaf key={'subtitle'} fontSize={'inherit'} />, 'leaves']}
        subtitleSeparator={text('subtitleSeparator', '___')}
        icon={<Temp />}
    />
);

withArrayForSubtitles.story = { name: 'with array for subtitles' };
