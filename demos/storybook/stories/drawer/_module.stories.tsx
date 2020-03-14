import { Drawer } from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import React, { ReactNode } from 'react';
import { COMPONENT_SECTION_NAME } from '../../src/constants';
import { getReadMe, storyParams, storyWrapper } from '../../src/utils';
import { addClickEvents, DrawerState } from './util';
import { navGroupItems1 } from './with-basic-config';

const padDrawer = (storyFn: any): JSX.Element => (
    <div style={{ margin: 20, display: 'flex', height: '100%' }}>{storyFn()}</div>
);

const store = new Store<DrawerState>({
    selected: '',
});

const wrapStore = (storyFn: any): JSX.Element => (
    <State store={store}>
        {(state): ReactNode[] => {
            addClickEvents(store, navGroupItems1);
            return storyFn({ store, state });
        }}
    </State>
);

const drawerModule = {
    title: `${COMPONENT_SECTION_NAME}/Drawer`,
    component: Drawer,
    decorators: [storyWrapper, padDrawer, wrapStore],
    parameters: { ...storyParams, notes: { markdown: getReadMe('Drawer.md') } },
};

/* Display order goes here */
export { getReadMeStory } from '../../src/utils';
export { withBasicConfig } from './with-basic-config';
export * from './with-custom-header';
export * from './with-subheader';
export { withMultipleNavGroups } from './with-multiple-DrawerNavGroups';
export * from './with-nested-list-items';
export * from './with-footer';
export * from './with-full-config';
export * from './within-a-DrawerLayout';

export default drawerModule;
