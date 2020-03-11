import { ListItemTag } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';

const listItemTagModule = {
    title: `${COMPONENT_SECTION_NAME}/List Item Tag`,
    component: ListItemTag,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: getReadMe('ListItemTag.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-diff-colors';
export * from './with-typography-props';

export default listItemTagModule;
