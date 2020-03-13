import { Hero } from '@pxblue/react-components';
import React from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';

const centerHero = (storyFn: any): JSX.Element => (
    <div style={{ alignItems: 'center', display: 'flex', height: '100%' }}>{storyFn()}</div>
);

const heroModule = {
    title: `${COMPONENT_SECTION_NAME}/Hero`,
    component: Hero,
    decorators: [storyWrapper, centerHero],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Hero.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-value-and-units';
export * from './with-channelValue-children';
export * from './with-icon-colors';
export * from './with-full-config';
export * from './within-a-HeroBanner';

export default heroModule;
