import { generateUtilityClass } from '@mui/material';

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
