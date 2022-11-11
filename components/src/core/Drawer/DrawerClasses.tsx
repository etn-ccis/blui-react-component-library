import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

export type DrawerClasses = {
    /** Styles applied to the drawer content container */
    content?: string;

    /** Styles applied to the root element when the drawer is expanded */
    expanded?: string;

    /** MUI Drawer style override for the root element */
    root?: string;

    /** MUI Drawer style override for desktop viewports */
    paper?: string;

    /** Styles to apply to the root element when using side border */
    sideBorder?: string;
};

export type DrawerClassKey = keyof DrawerClasses;

export function getDrawerUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawer', slot);
}

const drawerClasses: DrawerClasses = generateUtilityClasses('BluiDrawer', [
    'root',
    'content',
    'expanded',
    'paper',
    'sideBorder',
]);

export default drawerClasses;
