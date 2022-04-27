import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type InfoListItemClasses = {
    root?: string;
    avatar?: string;
    divider?: string;
    icon?: string;
    info?: string;
    listItemText?: string;
    listItemButtonRoot?: string;
    rightComponent?: string;
    separator?: string;
    statusStripe?: string;
    subtitle?: string;
    title?: string;
    chevron?: string;
    invisible?: string;
    flipIcon?: string;
};

export type InfoListItemClassKey = keyof InfoListItemClasses;

export function getInfoListItemUtilityClass(slot: string): string {
    return generateUtilityClass('BluiInfoListItem', slot);
}

const infoListItemClasses: InfoListItemClasses = generateUtilityClasses('BluiInfoListItem', [
    'root',
    'avatar',
    'divider',
    'icon',
    'info',
    'listItemText',
    'listItemButtonRoot',
    'rightComponent',
    'separator',
    'statusStripe',
    'subtitle',
    'title',
    'chevron',
]);

export default infoListItemClasses;
