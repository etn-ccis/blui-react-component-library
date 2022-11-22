import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type DrawerNavGroupClasses = {
    root?: string;
    subheader?: string;
    title?: string;
};

export type DrawerNavGroupClassKey = keyof DrawerNavGroupClasses;

export function getDrawerNavGroupUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerNavGroup', slot);
}

const drawerNavGroupClasses: DrawerNavGroupClasses = generateUtilityClasses('BluiDrawerNavGroup', [
    'root',
    'subheader',
    'title',
]);

export default drawerNavGroupClasses;
