import { Temp } from '@pxblue/icons-mui';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withArrayForSubtitles = (): StoryFnReactReturnType => (
    <InfoListItem
        title={'Temperature'}
        subtitle={[
            <ChannelValue value={'50'} units={'°C'} key="cv1" />,
            <ChannelValue value={'55'} units={'°C'} key="cv2" />,
        ]}
        subtitleSeparator={text('subtitleSeparator', '·')}
        icon={<Temp />}
    />
);

withArrayForSubtitles.story = { name: 'with array for subtitles' };
