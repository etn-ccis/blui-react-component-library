import { EmptyState } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const emptyStateModule = {
    title: `${COMPONENT_SECTION_NAME}/Empty State`,
    component: EmptyState,
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('EmptyState.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-description';
export * from './with-actions';
export * from './with-full-config';

export default emptyStateModule;
