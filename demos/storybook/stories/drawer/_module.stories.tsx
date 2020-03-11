import { Drawer } from '@pxblue/react-components';
import React from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';

const padDrawer = (storyFn: any): JSX.Element => (
    <div style={{ margin: 20, display: 'flex', height: '100%' }}>{storyFn()}</div>
);

const drawerModule = {
    title: `${COMPONENT_SECTION_NAME}/Drawer`,
    component: Drawer,
    decorators: [storyWrapper, padDrawer],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Drawer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export * from './with-custom-header';
export * from './with-subheader';
export * from './with-nested-list-items';
export * from './in-a-drawerLayout';
export * from './with-full-config';

export default drawerModule;
