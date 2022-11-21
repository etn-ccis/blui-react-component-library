import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type DrawerHeaderClasses = {
    root?: string;
    background?: string;
    content?: string;
    navigation?: string;
    nonClickable?: string;
    nonClickableIcon?: string;
    railIcon?: string;
    subtitle?: string;
    title?: string;
};

export type DrawerHeaderClassKey = keyof DrawerHeaderClasses;

export function getDrawerHeaderUtilityClass(slot: string): string {
    return generateUtilityClass('BluiDrawerHeader', slot);
}

const drawerHeaderClasses: DrawerHeaderClasses = generateUtilityClasses('BluiDrawerHeader', [
    'root',
    'background',
    'content',
    'navigation',
    'nonClickable',
    'nonClickableIcon',
    'railIcon',
    'subtitle',
    'title',
]);

export default drawerHeaderClasses;
