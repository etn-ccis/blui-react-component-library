import { ListItemTag } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const listItemTagModule = {
    title: `${COMPONENT_SECTION_NAME}/List Item Tag`,
    component: ListItemTag,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('ListItemTag.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-custom-colors';
export * from './with-full-config';
export * from './within-InfoListItem';

export default listItemTagModule;
