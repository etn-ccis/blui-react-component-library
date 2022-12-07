import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type DrawerLayoutClasses = {
    /** Styles applied to the root element */
    root?: string;
    /** Styles applied to the body content container */
    content?: string;
    /** Styles applied to the drawer container */
    drawer?: string;
    /** Styles applied to the body root element when the drawer is expanded */
    expanded?: string;
};

export type DrawerLayoutClassKey = keyof DrawerLayoutClasses;

export function getDrawerLayoutUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerLayout', slot);
}

const drawerLayoutClasses: DrawerLayoutClasses = generateUtilityClasses('BluiDrawerLayout', [
    'root',
    'content',
    'drawer',
    'expanded',
]);

export default drawerLayoutClasses;
