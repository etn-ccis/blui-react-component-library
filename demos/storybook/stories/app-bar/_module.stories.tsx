import { AppBar } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';
// require('./style-overrides.css'); // This is impacting all other stories' styles right now.

const appBarModule = {
    title: `${COMPONENT_SECTION_NAME}/App Bar`,
    component: AppBar,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],

    parameters: {
        ...storyParams,
        notes: { markdown: require('./../../../../docs/AppBar.md') },
    },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export { withBasicUsage } from './with-basic-usage';
export { withVariants } from './with-variants';
export { withDynamicContent } from './with-dynamic-content';
export { withFullConfig } from './with-full-config';

export default appBarModule;
