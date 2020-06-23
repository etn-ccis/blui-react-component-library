import { Drawer } from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import React, { ReactNode } from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { addClickEvents, DrawerState } from './util';
import { navGroupItems1, navGroupItems2 } from './with-basic-config';
import { withA11y } from '@storybook/addon-a11y';

const alignDrawer = (storyFn: any): JSX.Element => (
    <div style={{ display: 'flex', height: '100%', alignSelf: 'flex-start', width: '100%' }}>{storyFn()}</div>
);

const store = new Store<DrawerState>({
    selected: '',
});

const wrapStore = (storyFn: any): JSX.Element => (
    <State store={store}>
        {(state): ReactNode[] => {
            addClickEvents(store, navGroupItems1);
            addClickEvents(store, navGroupItems2);
            return storyFn({ store, state });
        }}
    </State>
);

const drawerModule = {
    title: `${COMPONENT_SECTION_NAME}/Drawer`,
    component: Drawer,
    // @accessibility remove withA11y from decorators array to hide a11y addon
    decorators: [storyWrapper, alignDrawer, wrapStore, withA11y],
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
