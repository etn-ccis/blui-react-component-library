import { Spacer } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/util';

const spacerModule = {
    title: `${COMPONENT_SECTION_NAME}/Spacer`,
    component: Spacer,
    decorators: [storyWrapper],
    parameters: storyParams,
};

/* Display order goes here */
export * from './flex-layout';
export * from './static-layout';

export default spacerModule;
