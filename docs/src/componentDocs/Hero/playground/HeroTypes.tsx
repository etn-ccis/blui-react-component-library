import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const heroTypes: ComponentType = {
    componentName: 'Hero',
    props: [
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<Fan />',
            options: ['<Fan />'],
            propType: 'ReactNode',
            helperText: 'The primary icon',
            required: true,
        },
        {
            propName: 'iconBackgroundColor',
            inputType: 'colorPicker',
            inputValue: Colors.blue[500],
            propType: 'string',
            helperText: 'The color used behind the primary icon',
            required: false,
        },
        {
            propName: 'iconSize',
            inputType: 'number',
            inputValue: 36,
            propType: 'number | string',
            helperText: 'The size of the primary icon (min 10px)',
            required: false,
            rangeData: {
                min: 10,
                max: 360,
                step: 1,
            },
            defaultValue: 36,
        },
        {
            propName: 'label',
            inputType: 'string',
            inputValue: 'Velocity',
            propType: 'string',
            helperText: 'The text shown below the `ChannelValue`',
            required: true,
        },
    ],
    otherProps: [
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<TrendingUp />',
            options: ['<TrendingUp />', 'undefined'],
            propType: 'JSX.Element',
            helperText: 'The inline icon to display',
            required: false,
            defaultValue: '<TrendingUp />',
        },
        {
            propName: 'value',
            inputType: 'number',
            inputValue: 470,
            propType: 'number | string',
            helperText: 'The value (bold text) to display',
            required: true,
            rangeData: {
                min: 10,
                max: 500,
                step: 10,
            },
        },
        {
            propName: 'units',
            inputType: 'string',
            inputValue: 'RPM',
            propType: 'string',
            helperText: 'The text to display for the units (light text)',
            required: false,
        },
    ],
};

export default heroTypes;
