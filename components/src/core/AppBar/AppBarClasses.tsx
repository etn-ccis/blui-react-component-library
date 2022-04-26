import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type AppBarClasses = {
    root?: string;
    background?: string;
    expanded?: string;
    collapsed?: string;
    expandedBackground?: string;
};

export type AppBarClassKey = keyof AppBarClasses;

export function getAppBarUtilityClass(slot: string): string {
    return generateUtilityClass('BluiAppBar', slot);
}

const appBarClasses: AppBarClasses = generateUtilityClasses('BluiAppBar', [
    'root',
    'background',
    'expanded',
    'collapsed',
    'expandedBackground',
]);

export default appBarClasses;
