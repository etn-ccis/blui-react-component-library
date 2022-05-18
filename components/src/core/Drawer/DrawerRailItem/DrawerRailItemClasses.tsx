import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DrawerRailItemClasses = {
    root?: string;
    active?: string;
    condensed?: string;
    divider?: string;
    icon?: string;
    statusStripe?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
    cursorPointer?: string;
    itemActive?: string;
};

export type DrawerRailItemClassKey = keyof DrawerRailItemClasses;

export function getDrawerRailItemUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerRailItem', slot);
}

const drawerRailItemClasses: DrawerRailItemClasses = generateUtilityClasses('BluiDrawerRailItem', [
    'root',
    'active',
    'condensed',
    'divider',
    'icon',
    'statusStripe',
    'title',
    'titleActive',
    'ripple',
    'cursorPointer',
    'itemActive',
]);

export default drawerRailItemClasses;
