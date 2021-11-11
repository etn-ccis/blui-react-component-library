import { Drawer } from '@brightlayer-ui/react-components';
import React from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { withA11y } from '@storybook/addon-a11y';

const alignDrawer = (storyFn: any): JSX.Element => (
    <div style={{ display: 'flex', height: '100%', alignSelf: 'flex-start', width: '100%', flex: '1 1 0px' }}>
        {storyFn()}
    </div>
);

const drawerModule = {
    title: `${COMPONENT_SECTION_NAME}/Drawer`,
    component: Drawer,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, alignDrawer, withA11y],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Drawer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export { withBasicConfig } from './with-basic-config';
export * from './with-different-variants';
export * from './with-custom-header';
export * from './with-subheader';
export { withMultipleNavGroups } from './with-multiple-DrawerNavGroups';
export * from './with-nested-list-items';
export * from './with-footer';
export { withFullConfig } from './with-full-config';
export * from './within-a-DrawerLayout';

export default drawerModule;
