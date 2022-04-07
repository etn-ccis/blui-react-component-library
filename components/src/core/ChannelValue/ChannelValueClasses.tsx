import { generateUtilityClass, generateUtilityClasses } from '@mui/base';

export interface ChannelValueClasses {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the icon element. */
    icon?: string;
    /** Styles applied to the text element. */
    text?: string;
    /** Styles applied to the prefix element. */
    prefix?: string;
    /** Styles applied to the suffix element. */
    suffix?: string;
    /** Styles applied to the units element. */
    units?: string;
    /** Styles applied to the value element. */
    value?: string;
}

export type ChannelValueClassKey = keyof ChannelValueClasses;

export function getChannelValueUtilityClass(slot: string): string {
    return generateUtilityClass('BluiChannelValue', slot);
}

const channelValueClasses: ChannelValueClasses = generateUtilityClasses('BluiChannelValue', [
    'root',
    'icon',
    'text',
    'prefix',
    'suffix',
    'units',
    'value',
]);

export default channelValueClasses;
