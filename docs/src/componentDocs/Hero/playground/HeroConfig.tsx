import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const heroConfig: ComponentType = {
    componentName: 'Hero',
    props: [
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<Fan />',
            options: ['<Fan />', '<FanCircled />'],
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
            defaultValue: 'transparent',
        },
        {
            propName: 'iconSize',
            inputType: 'number',
            inputValue: 36,
            propType: 'number | string',
            helperText: 'The size of the primary icon (min 10px)',
            required: false,
            defaultValue: 36,
            rangeData: {
                min: 10,
                max: 100,
                step: 1,
            },
        },
        {
            propName: 'label',
            inputType: 'string',
            inputValue: 'Velocity',
            propType: 'string',
            helperText: 'The text shown below the Channel Value',
            required: true,
        },
    ],
    otherProps: [
        {
            propName: 'htmlColor',
            inputType: 'colorPicker',
            inputValue: Colors.white[50],
            propType: 'string',
            helperText: 'The color apply to primary icon',
            required: false,
            label: 'Icon Color',
        },
    ],
    otherComponentProps: {
        childComponentName: 'Channel Value Props',
        childComponentProps: [
            {
                propName: 'units',
                inputType: 'string',
                inputValue: 'RPM',
                propType: 'string',
                helperText: 'The text to display for the units (light text)',
                required: false,
            },
            {
                propName: 'valueIcon',
                inputType: 'select',
                inputValue: '<TrendingUp />',
                options: ['undefined', '<TrendingUp />'],
                propType: 'JSX.Element',
                helperText: 'The inline icon to display',
                required: false,
                defaultValue: '<TrendingUp />',
            },
            {
                propName: 'value',
                inputType: 'string',
                inputValue: 470,
                propType: 'number | string',
                helperText: 'The value (bold text) to display',
                required: true,
            },
        ],
    },
};

export default heroConfig;
