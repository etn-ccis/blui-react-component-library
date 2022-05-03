import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export type ToolbarMenuClasses = {
    root?: string;
    dropdownArrow?: string;
    icon?: string;
    label?: string;
    cursorPointer?: string;
    navGroups?: string;
    rotatedDropdownArrow?: string;
};

export type ToolbarMenuClassKey = keyof ToolbarMenuClasses;

export function getToolbarMenuUtilityClass(slot: string): string {
    return generateUtilityClass('BluiToolbarMenu', slot);
}

const toolbarMenuClasses: ToolbarMenuClasses = generateUtilityClasses('BluiToolbarMenu', [
    'root',
    'dropdownArrow',
    'icon',
    'label',
    'cursorPointer',
    'navGroups',
    'rotatedDropdownArrow',
]);

export default toolbarMenuClasses;
