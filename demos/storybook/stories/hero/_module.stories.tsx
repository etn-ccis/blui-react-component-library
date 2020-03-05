import { Hero } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';

const heroModule = {
    title: `${COMPONENT_SECTION_NAME}/Hero`,
    component: Hero,
    decorators: [storyWrapper],
    parameters: storyParams,
};

/* Display order goes here */
export * from './with-basic-props';
export * from './with-channelValue-children';
export * from './in-a-banner';

export default heroModule;
