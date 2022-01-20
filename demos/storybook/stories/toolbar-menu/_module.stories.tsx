import { ToolbarMenu } from '@brightlayer-ui/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const toolbarMenuModule = {
    title: `${COMPONENT_SECTION_NAME}/Toolbar Menu`,
    component: ToolbarMenu,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/ToolbarMenu.md') } },
};

/* Display order goe6s here */
export { getReadMeStory } from '../../src/utils';
export { withBasicUsage } from './with-basic-usage';
export { iconWithLabel } from './icon-with-label';
export default toolbarMenuModule;
