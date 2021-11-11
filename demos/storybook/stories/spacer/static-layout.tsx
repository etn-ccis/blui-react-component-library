import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import * as Colors from '@brightlayer-ui/colors';
import { Spacer } from '@brightlayer-ui/react-components';
import { Typography } from '@material-ui/core';
import { number } from '@storybook/addon-knobs';

export const staticLayout = (): StoryFnReactReturnType => {
    const size1 = number('Item 1 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });
    const size2 = number('Item 2 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });
    const size3 = number('Item 3 Size (px)', 60, { range: true, min: 20, max: 100, step: 20 });

    return (
        <>
            <Typography>Horizontal</Typography>
            <div style={{ width: 300, height: 50, display: 'inline', color: Colors.black[900] }}>
                <Spacer width={size1} style={{ background: Colors.blue[300], display: 'inline-block' }}>
                    1
                </Spacer>
                <Spacer width={size2} style={{ background: Colors.yellow[300], display: 'inline-block' }}>
                    2
                </Spacer>
                <Spacer width={size3} style={{ background: Colors.red[300], display: 'inline-block' }}>
                    3
                </Spacer>
            </div>
            <Typography style={{ marginTop: 20 }}>Vertical</Typography>
            <div style={{ width: 300, height: 300, color: Colors.black[900] }}>
                <Spacer height={size1} style={{ background: Colors.blue[300] }}>
                    1
                </Spacer>
                <Spacer height={size2} style={{ background: Colors.yellow[300] }}>
                    2
                </Spacer>
                <Spacer height={size3} style={{ background: Colors.red[300] }}>
                    3
                </Spacer>
            </div>
        </>
    );
};

staticLayout.story = { name: 'with static layout' };
