import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DrawerNavItemClasses = {
    root?: string;
    active?: string;
    expandIcon?: string;
    infoListItemRoot?: string;
    nestedListGroup?: string;
    nestedTitle?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
    expanded?: string;
    drawerOpen?: string;
    noIconTitle?: string;
    textSecondary?: string;
    square?: string;
};

export type DrawerNavItemClassKey = keyof DrawerNavItemClasses;

export function getDrawerNavItemUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerNavItem', slot);
}

const drawerNavItemClasses: DrawerNavItemClasses = generateUtilityClasses('BluiDrawerNavItem', [
    'root',
    'active',
    'expandIcon',
    'infoListItemRoot',
    'nestedListGroup',
    'nestedTitle',
    'title',
    'titleActive',
    'ripple',
    'expanded',
    'drawerOpen',
    'noIconTitle',
    'textSecondary',
    'square',
]);

export default drawerNavItemClasses;
