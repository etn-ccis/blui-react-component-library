import * as Colors from '@pxblue/colors';
import { CurrentCircled, GradeA, Leaf, Temp } from '@pxblue/icons-mui';
import { Hero, HeroBanner } from '@pxblue/react-components';
import {boolean, color, number} from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {makeStyles} from "@material-ui/core";

export const inBanner = (): StoryFnReactReturnType => {
    const enableToolTip = boolean('enableToolTip', true);
    const useStyles = makeStyles({
        popper: {
            backgroundColor: Colors.blue[500]
        },
    });
    const overrides = useStyles();
    const toolTipProps = { arrow: false, classes: { tooltip: overrides.popper } };

    const heroes = [
        <Hero
            key={'hero1'}
            icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Healthy'}
            value={96}
            units={'/100'}
            enableToolTip={enableToolTip}
        />,
        <Hero
            key={'hero2'}
            icon={<CurrentCircled fontSize={'inherit'} htmlColor={Colors.yellow[500]} />}
            label={'Load'}
            value={'90'}
            units={'%'}
            fontSize={'normal'}
            enableToolTip={enableToolTip}
        />,
        <Hero
            key={'hero3'}
            icon={<Temp fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Temp'}
            value={55}
            units={'C'}
            enableToolTip={enableToolTip}
            ToolTipProps={toolTipProps}
        />,
        <Hero
            key={'hero4'}
            icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Battery'}
            value={96}
            units={'/100'}
            enableToolTip={enableToolTip}
        />,
    ];
    const numberDisplayed = number('count', 4, { range: true, min: 0, max: 4, step: 1 });
    return <HeroBanner>{heroes.slice(0, numberDisplayed)}</HeroBanner>;
};

inBanner.story = { name: 'within a HeroBanner' };
