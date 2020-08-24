import { DropdownToolbar } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const dropdownToolbarModule = {
    title: `${COMPONENT_SECTION_NAME}/Dropdown Toolbar`,
    component: DropdownToolbar,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('DropdownToolbar.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-basic-usage';
export * from './with-nav-icon';
export * from './with-custom-menu';
export * from './with-multiple-menu-groups';
export * from './with-menu-placement-options';
export * from './with-full-config';

export default dropdownToolbarModule;
