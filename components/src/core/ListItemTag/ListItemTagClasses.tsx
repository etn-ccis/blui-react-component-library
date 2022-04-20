import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ListItemTagClasses = {
    /** Styles applied to the root element. */
    root?: string;
};

export type ListItemTagClassKey = keyof ListItemTagClasses;

export function getListItemTagUtilityClass(slot: string): string {
    return generateUtilityClass('BluiListItemTag', slot);
}

const listItemTagClasses: ListItemTagClasses = generateUtilityClasses('BluiListItemTag', ['root']);

export default listItemTagClasses;
