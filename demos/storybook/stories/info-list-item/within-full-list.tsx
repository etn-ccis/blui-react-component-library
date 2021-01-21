import * as Colors from '@pxblue/colors';
import { Device, GradeA, Leaf, Temp } from '@pxblue/icons-mui';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import { select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

export const withinFullList = (): StoryFnReactReturnType => {
    const divider = select('divider', ['none', 'full', 'partial'], 'full');
    const appliedDivider = divider === 'none' ? undefined : divider;
    const alertColor = useDarkMode() ? Colors.red[300] : Colors.red[500];

    return (
        <>
            <InfoListItem
                dense
                title={'Status'}
                divider={appliedDivider}
                statusColor={Colors.green[500]}
                subtitleSeparator={'/'}
                icon={<Leaf color={'inherit'} />}
                iconAlign={'center'}
                rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
            />
            <InfoListItem
                title={'Input Voltage'}
                divider={appliedDivider}
                avatar
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<GradeA />}
                rightComponent={
                    <span>
                        <ChannelValue fontSize={16} value={478} units={'V'} />,{' '}
                        <ChannelValue fontSize={16} value={479} units={'V'} />,{' '}
                        <ChannelValue fontSize={16} value={473} units={'V'} />
                    </span>
                }
            />
            <InfoListItem
                title={'Output Voltage'}
                divider={appliedDivider}
                avatar
                statusColor={alertColor}
                fontColor={alertColor}
                iconColor={Colors.white[50]}
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<GradeA color={'inherit'} />}
                rightComponent={
                    <span style={{ color: alertColor }}>
                        <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                        <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                        <ChannelValue fontSize={16} value={480} units={'V'} />
                    </span>
                }
            />
            <InfoListItem
                dense
                title={'Output Current'}
                divider={appliedDivider}
                icon={<Device color={'inherit'} />}
                rightComponent={
                    <span>
                        <ChannelValue fontSize={16} value={15} units={'A'} />,{' '}
                        <ChannelValue fontSize={16} value={14.9} units={'A'} />,{' '}
                        <ChannelValue fontSize={16} value={15} units={'A'} />
                    </span>
                }
                iconAlign={'center'}
            />
            <InfoListItem
                dense
                title={'Temperature'}
                divider={appliedDivider}
                icon={<Temp />}
                rightComponent={
                    <ChannelValue fontSize={16} value={68} units={'°F'} />
                }
                iconAlign={'center'}
            />
        </>
    );
};

withinFullList.story = { name: 'within a full list' };
