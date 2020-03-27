import { NavItem } from '@pxblue/react-components';
import { Store } from '@sambego/storybook-state';

export const addClickEvents = (store: Store<DrawerState>, items: NavItem[]): void => {
    items.map((item) => {
        item.onClick = (): void => store.set({ selected: item.itemID });
    });
};

export type DrawerState = {
    selected: string;
};

export type DrawerStoryContext = {
    state: DrawerState;
    store: Store<DrawerState>;
};
