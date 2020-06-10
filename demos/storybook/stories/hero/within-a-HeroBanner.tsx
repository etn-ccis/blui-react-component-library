import * as Colors from '@pxblue/colors';
import { CurrentCircled, GradeA, Leaf, Temp } from '@pxblue/icons-mui';
import { Hero, HeroBanner } from '@pxblue/react-components';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const inBanner = (): StoryFnReactReturnType => {
    const heroes = [
        <Hero
            key={'hero1'}
            icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Healthy'}
            value={96}
            units={'/100'}
        />,
        <Hero
            key={'hero2'}
            icon={<CurrentCircled fontSize={'inherit'} htmlColor={Colors.yellow[500]} />}
            label={'Load'}
            value={'90'}
            units={'%'}
        />,
        <Hero
            key={'hero3'}
            icon={<Temp fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Temp'}
            value={55}
            units={'C'}
        />,
        <Hero
            key={'hero4'}
            icon={<Leaf fontSize={'inherit'} htmlColor={Colors.green[500]} />}
            label={'Battery'}
            value={96}
            units={'/100'}
        />,
    ];
    const numberDisplayed = number('count', 4, { range: true, min: 0, max: 4, step: 1 });
    return <HeroBanner style={{ width: numberDisplayed * 100 }}>{heroes.slice(0, numberDisplayed)}</HeroBanner>;
};

inBanner.story = { name: 'within a Hero Banner' };
