import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const channelValueConfig: ComponentType = {
    componentName: 'Channel Value',
    props: [
        {
            propName: 'color',
            inputType: 'colorPicker',
            inputValue: Colors.black[500],
            propType: 'string',
            helperText: 'The color of the font',
            required: false,
        },
        {
            propName: 'fontSize',
            inputType: 'number',
            inputValue: 30,
            propType: 'number | string',
            helperText: 'The size of the font',
            required: false,
            rangeData: {
                min: 10,
                max: 700,
                step: 10,
            },
        },
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<TrendingUp />',
            options: ['<TrendingUp />', '<TrendingDown />'],
            propType: 'JSX.Element',
            helperText: 'The inline icon to display',
            required: false,
        },
        {
            propName: 'prefix',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Show units before the value',
            required: false,
            defaultValue: false,
        },
        {
            propName: 'units',
            inputType: 'string',
            inputValue: 'hz',
            propType: 'string',
            helperText: 'The text to display for the units (light text)',
            required: false,
        },
        {
            propName: 'unitSpace',
            inputType: 'select',
            inputValue: 'auto',
            options: ['auto', 'hide', 'show'],
            propType: 'string',
            helperText: 'Show/Hide spacing between the value and units',
            required: true,
            defaultValue: 'auto',
        },
        {
            propName: 'value',
            inputType: 'string',
            inputValue: 123,
            propType: 'number | string',
            helperText: 'The value (bold text) to display',
            required: true,
        },
    ],
    otherProps: [
        {
            propName: 'htmlColor',
            inputType: 'colorPicker',
            inputValue: Colors.red[500],
            propType: 'string',
            helperText: 'The color apply to primary icon',
            required: false,
        },
    ],
};

export default channelValueConfig;
