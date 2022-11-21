import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type EmptyStateClasses = {
    root?: string;
    actions?: string;
    description?: string;
    icon?: string;
    title?: string;
};

export type EmptyStateClassKey = keyof EmptyStateClasses;

export function getEmptyStateUtilityClass(slot: string): string {
    return generateUtilityClass('BluiEmptyState', slot);
}

const emptyStateClasses: EmptyStateClasses = generateUtilityClasses('BluiEmptyState', [
    'root',
    'actions',
    'description',
    'icon',
    'title',
]);

export default emptyStateClasses;
