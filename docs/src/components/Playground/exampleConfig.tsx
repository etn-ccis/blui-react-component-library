import { PlaygroundComponent } from './types';
import * as Colors from '@brightlayer-ui/colors';
import { TrendingDown, TrendingUp } from '@mui/icons-material';

export const channelValueConfig: PlaygroundComponent = {
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
                max: 50,
                step: 10,
            },
        },
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: 'TrendingUp',
            options: ['undefined', 'TrendingUp', 'TrendingDown'],
            optionsValueMapping: [undefined, <TrendingUp color={'primary'} />, <TrendingDown color={'error'} />],
            propType: 'JSX.Element',
            helperText: 'The inline icon to display',
            required: false,
            defaultValue: 'undefined',
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
            required: false,
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
    // additionalProps: [
    //     {
    //         propName: 'htmlColor',
    //         inputType: 'colorPicker',
    //         inputValue: Colors.red[500],
    //         propType: 'string',
    //         helperText: 'The color apply to primary icon',
    //         required: false,
    //         label: 'Icon Color',
    //     },
    // ],
};

export default channelValueConfig;
