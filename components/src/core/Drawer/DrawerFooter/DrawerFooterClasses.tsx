import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type DrawerFooterClasses = {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the hidden element. */
    hidden?: string;
};

export type DrawerFooterClassKey = keyof DrawerFooterClasses;

export function getDrawerFooterUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerFooter', slot);
}

const drawerFooterClasses: DrawerFooterClasses = generateUtilityClasses('BluiDrawerFooter', ['root', 'hidden']);

export default drawerFooterClasses;
