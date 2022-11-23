import generateUtilityClass from '@mui/material/generateUtilityClass';

export type SpacerClasses = {
    /** Styles applied to the root element. */
    root?: string;
};

export type SpacerClassKey = keyof SpacerClasses;

export function getSpacerUtilityClass(slot: string): string {
    return generateUtilityClass('BluiSpacer', slot);
}
