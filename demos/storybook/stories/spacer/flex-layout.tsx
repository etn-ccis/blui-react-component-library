import { Typography } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { Spacer } from '@pxblue/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const flexLayout = (): StoryFnReactReturnType => {
    const flex1 = number('Item 1 Flex', 1, { range: true, min: 1, max: 5, step: 1 });
    const flex2 = number('Item 2 Flex', 1, { range: true, min: 1, max: 5, step: 1 });
    const flex3 = number('Item 3 Flex', 1, { range: true, min: 1, max: 5, step: 1 });

    return (
        <>
            <Typography>Horizontal</Typography>
            <div
                style={{
                    width: 300,
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    color: Colors.black[900],
                }}
            >
                <Spacer flex={flex1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={flex2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={flex3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
            <Typography style={{ marginTop: 20 }}>Vertical</Typography>
            <div
                style={{
                    width: 300,
                    height: 150,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    color: Colors.black[900],
                }}
            >
                <Spacer flex={flex1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer flex={flex2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer flex={flex3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
        </>
    );
};

flexLayout.story = { name: 'with flex layout' };
