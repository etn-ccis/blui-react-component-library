import { UserMenu } from '@pxblue/react-components';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { storyParams, storyWrapper } from '../../src/utils';

const userMenuModule = {
    title: `${COMPONENT_SECTION_NAME}/User Menu`,
    component: UserMenu,
    decorators: [storyWrapper],
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

export default userMenuModule;
