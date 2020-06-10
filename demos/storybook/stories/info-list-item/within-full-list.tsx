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
                rightComponent={<ChannelValue style={{ fontSize: 16 }} value={'Online, ESS+'} />}
            />
            <InfoListItem
                title={'Input Voltage'}
                divider={appliedDivider}
                avatar
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<GradeA />}
                rightComponent={
                    <span style={{ fontSize: 16 }}>
                        <ChannelValue value={478} units={'V'} />, <ChannelValue value={479} units={'V'} />,{' '}
                        <ChannelValue value={473} units={'V'} />
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
                    <span style={{ color: alertColor, fontSize: 16 }}>
                        <ChannelValue value={480} units={'V'} />, <ChannelValue value={480} units={'V'} />,{' '}
                        <ChannelValue value={480} units={'V'} />
                    </span>
                }
            />
            <InfoListItem
                dense
                title={'Output Current'}
                divider={appliedDivider}
                icon={<Device color={'inherit'} />}
                rightComponent={
                    <span style={{ fontSize: 16 }}>
                        <ChannelValue value={15} units={'A'} />, <ChannelValue value={14.9} units={'A'} />,{' '}
                        <ChannelValue value={15} units={'A'} />
                    </span>
                }
            />
            <InfoListItem
                dense
                title={'Temperature'}
                divider={appliedDivider}
                icon={<Temp />}
                rightComponent={
                    <ChannelValue
                        style={{ fontSize: 16 }}
                        icon={<Leaf htmlColor={Colors.green[500]} />}
                        value={68}
                        units={'°F'}
                    />
                }
            />
        </>
    );
};

withinFullList.story = { name: 'within a full list' };
