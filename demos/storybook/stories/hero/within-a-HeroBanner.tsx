import * as Colors from '@brightlayer-ui/colors';
import { CurrentCircled, GradeA, Leaf, Temp } from '@brightlayer-ui/icons-mui';
import { Hero, HeroBanner } from '@brightlayer-ui/react-components';
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
            fontSize={'normal'}
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
    const bannerWidth = number('width', 400, { range: true, min: 350, max: 600, step: 50 });
    return (
        <HeroBanner style={{ width: bannerWidth, border: `solid 1px ${Colors.gray[200]}`, borderRadius: 4 }}>
            {heroes.slice(0, numberDisplayed)}
        </HeroBanner>
    );
};

inBanner.story = { name: 'within a Hero Banner' };
