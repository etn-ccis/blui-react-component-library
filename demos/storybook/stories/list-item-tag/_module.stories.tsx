import { ListItemTag } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';

const listItemTagModule = {
    title: `${COMPONENT_SECTION_NAME}/List Item Tag`,
    component: ListItemTag,
    decorators: [storyWrapper],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/ListItemTag.md') } },
};

/* Display order goes here */
export * from './with-diff-colors';
export * from './with-typography-props';

export default listItemTagModule;
