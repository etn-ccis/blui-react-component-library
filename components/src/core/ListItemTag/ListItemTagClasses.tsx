import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ListItemTagClasses = {
    root?: string;
    noVariant?: string;
};

export function getListItemTagUtilityClass(slot: string): string {
    return generateUtilityClass('BluiListItemTag', slot);
}

const listItemTagClasses: ListItemTagClasses = generateUtilityClasses('BluiListItemTag', ['root', 'noVariant']);

export default listItemTagClasses;
