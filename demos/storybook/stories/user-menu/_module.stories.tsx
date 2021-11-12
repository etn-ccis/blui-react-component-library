import { UserMenu } from '@brightlayer-ui/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const userMenuModule = {
    title: `${COMPONENT_SECTION_NAME}/User Menu`,
    component: UserMenu,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, withA11y],
    parameters: { ...storyParams, notes: { markdown: require('./../../../../docs/UserMenu.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export { withBasicUsage } from './with-basic-usage';
export * from './with-custom-colors';
export * from './with-non-text-avatar';
export * from './with-menu-header';
export * from './with-menu-placement-options';
export * from './with-custom-menu';
export * from './with-full-config';
export * from './within-a-toolbar';

export default userMenuModule;
