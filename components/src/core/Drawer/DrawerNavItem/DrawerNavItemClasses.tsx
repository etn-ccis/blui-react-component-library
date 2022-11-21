import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type DrawerNavItemClasses = {
    root?: string;
    active?: string;
    chevron?: string;
    expandIcon?: string;
    infoListItemRoot?: string;
    nestedListGroup?: string;
    nestedTitle?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
};

export type DrawerNavItemClassKey = keyof DrawerNavItemClasses;

export function getDrawerNavItemUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerNavItem', slot);
}

const drawerNavItemClasses: DrawerNavItemClasses = generateUtilityClasses('BluiDrawerNavItem', [
    'root',
    'active',
    'chevron',
    'expandIcon',
    'infoListItemRoot',
    'nestedListGroup',
    'nestedTitle',
    'title',
    'titleActive',
    'ripple',
]);

export default drawerNavItemClasses;
