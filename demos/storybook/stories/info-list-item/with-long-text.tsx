//@ts-ignore
import { Leaf } from '@pxblue/icons-mui';
import { InfoListItem } from '@pxblue/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withLongText = (): StoryFnReactReturnType => {
    const title = text('title', 'This is a really really really really really really really really long title');
    const subtitle = text(
        'subtitle',
        'this is a really really really really really really really really really really long subtitle'
    );
    const divider = boolean('divider', true) ? 'full' : undefined;

    return <InfoListItem dense title={title} subtitle={subtitle} divider={divider} icon={<Leaf />} />;
};

withLongText.story = { name: 'with long text' };
