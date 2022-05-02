import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DrawerBodyClasses = {
    root?: string;
};

export type DrawerBodyClassKey = keyof DrawerBodyClasses;

export function getDrawerBodyUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerBody', slot);
}

const drawerBodyClasses: DrawerBodyClasses = generateUtilityClasses('BluiDrawerBody', ['root']);

export default drawerBodyClasses;
