//@ts-ignore
import { Leaf, Temp } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const arrayForSubtitles = (): StoryFnReactReturnType => (
    <InfoListItem
        dense
        title={text('Title', 'Temperature')}
        subtitle={['4', <Leaf key={'subtitle'} fontSize={'inherit'} />, 'leaves']}
        subtitleSeparator={text('separator', '-')}
        divider={'full'}
        icon={<Temp />}
    />
);

arrayForSubtitles.story = { name: 'array for subtitles' };
