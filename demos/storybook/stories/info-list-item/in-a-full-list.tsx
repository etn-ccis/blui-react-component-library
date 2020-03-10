import { List } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
//@ts-ignore
import { Device, GradeA, Leaf, Temp } from '@pxblue/icons-mui';
import { ChannelValue, InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const inAFullList = (): StoryFnReactReturnType => (
    <List style={{ color: Colors.gray['800'], padding: 0 }}>
        <InfoListItem
            dense
            title={'Status'}
            divider={'full'}
            statusColor={Colors.green[500]}
            subtitleSeparator={'/'}
            icon={<Leaf color={'inherit'} />}
            rightComponent={<ChannelValue fontSize={16} value={'Online, ESS+'} />}
        />
        <InfoListItem
            title={'Input Voltage'}
            divider={'full'}
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
            divider={'full'}
            avatar
            statusColor={Colors.red[500]}
            fontColor={Colors.red[500]}
            subtitle={['Phase A', 'Phase B', 'Phase C']}
            icon={<GradeA color={'inherit'} />}
            rightComponent={
                <span style={{ color: Colors.red[500] }}>
                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={480} units={'V'} />,{' '}
                    <ChannelValue fontSize={16} value={480} units={'V'} />
                </span>
            }
        />
        <InfoListItem
            dense
            title={'Output Current'}
            divider={'full'}
            icon={<Device color={'inherit'} />}
            rightComponent={
                <span>
                    <ChannelValue fontSize={16} value={15} units={'A'} />,{' '}
                    <ChannelValue fontSize={16} value={14.9} units={'A'} />,{' '}
                    <ChannelValue fontSize={16} value={15} units={'A'} />
                </span>
            }
        />
        <InfoListItem
            dense
            title={'Temperature'}
            divider={'full'}
            icon={<Temp />}
            rightComponent={
                <ChannelValue fontSize={16} icon={<Leaf htmlColor={Colors.green[500]} />} value={68} units={'°F'} />
            }
        />
    </List>
);

inAFullList.story = { name: 'in a full list' };
