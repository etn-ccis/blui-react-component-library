import { Spacer } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import {getReadMe, storyParams, storyWrapper} from '../../src/utils';

const spacerModule = {
    title: `${COMPONENT_SECTION_NAME}/Spacer`,
    component: Spacer,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Spacer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './flex-layout';
export * from './static-layout';

export default spacerModule;
