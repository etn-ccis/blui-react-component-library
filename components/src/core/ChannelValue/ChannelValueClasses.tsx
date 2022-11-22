import generateUtilityClass from '@mui/material/generateUtilityClass';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';

export type ChannelValueClasses = {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the icon element. */
    icon?: string;
    /** Styles applied to the text element. */
    text?: string;
    /** Styles applied to the units element. */
    units?: string;
    /** Styles applied to the value element. */
    value?: string;
};

export type ChannelValueClassKey = keyof ChannelValueClasses;

export function getChannelValueUtilityClass(slot: string): string {
    return generateUtilityClass('BluiChannelValue', slot);
}

const channelValueClasses: ChannelValueClasses = generateUtilityClasses('BluiChannelValue', [
    'root',
    'icon',
    'text',
    'units',
    'value',
]);

export default channelValueClasses;
