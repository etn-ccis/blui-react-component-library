import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ListItemTagClasses = {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the root element if there is no variant. */
    noVariant?: string;
};

export type ListItemTagClassKey = keyof ListItemTagClasses;

export function getListItemTagUtilityClass(slot: string): string {
    return generateUtilityClass('BluiListItemTag', slot);
}

const listItemTagClasses: ListItemTagClasses = generateUtilityClasses('BluiListItemTag', ['root', 'noVariant']);

export default listItemTagClasses;
