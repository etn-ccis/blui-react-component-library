import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { ChannelValue, ThreeLiner } from '@pxblue/react-components';
import Trend from '@material-ui/icons/TrendingUp';
import * as Colors from '@pxblue/colors';
import { getLeftToRightIconTransform } from '../../src/utils';

export const withCustomContent = (): StoryFnReactReturnType => {
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');
    const infoContent = select('infoContent', ['text', '<ChannelValue />'], '<ChannelValue />');
    return (
        <ThreeLiner
            title={title}
            subtitle={subtitle}
            info={
                infoContent === 'channelValue' ? (
                    <ChannelValue
                        value={'123'}
                        units={'hz'}
                        icon={<Trend htmlColor={Colors.red[500]} style={getLeftToRightIconTransform()} />}
                    />
                ) : (
                    info
                )
            }
        />
    );
};

withCustomContent.story = { name: 'with custom content' };
