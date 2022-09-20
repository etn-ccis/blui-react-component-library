import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const scoreCardConfig: ComponentType = {
    componentName: 'Score Card',
    props: [
        {
            propName: 'actionLimit',
            inputType: 'number',
            inputValue: 3,
            propType: 'number',
            helperText: 'Max number of actionItems in the header',
            required: false,
            rangeData: {
                min: 1,
                max: 6,
                step: 1,
            },
            defaultValue: 3,
        },
        {
            propName: 'badgeOffset',
            inputType: 'number',
            inputValue: -40,
            propType: 'number',
            helperText: 'Vertical offset for the badge component',
            required: false,
            rangeData: {
                min: -50,
                max: 50,
                step: 10,
            },
            defaultValue: 0,
        },
        {
            propName: 'headerBackgroundImage',
            inputType: 'select',
            inputValue: 'undefined',
            options: ['undefined', 'Pattern'],
            propType: 'string',
            helperText: 'An image to display in the header',
            required: false,
            defaultValue: 'undefined',
        },
        {
            propName: 'headerColor',
            inputType: 'colorPicker',
            inputValue: Colors.blue[500],
            propType: 'string',
            helperText: 'The color of the header',
            required: false,
        },
        {
            propName: 'headerFontColor',
            inputType: 'colorPicker',
            inputValue: Colors.white[50],
            propType: 'string',
            helperText: 'The color for text and icons in header',
            required: false,
            defaultValue: 'white',
        },
        {
            propName: 'headerInfo',
            inputType: 'string',
            inputValue: '4 Devices',
            propType: 'string',
            helperText: 'Tertiary text',
            required: false,
        },
        {
            propName: 'headerTitle',
            inputType: 'string',
            inputValue: 'Substation 3',
            propType: 'string',
            helperText: 'The primary text',
            required: true,
        },
        {
            propName: 'headerSubtitle',
            inputType: 'string',
            inputValue: 'High Humidity Alarm',
            propType: 'string',
            helperText: 'The secondary text',
            required: false,
        },
    ],
    otherProps: [
        {
            propName: 'numberofHeroes',
            inputType: 'number',
            inputValue: 1,
            propType: 'number',
            helperText: 'Number of heroes to render as badges',
            required: false,
            rangeData: {
                min: 0,
                max: 2,
                step: 1,
            },
            defaultValue: 1,
            label: 'Number of Heroes',
        },
    ],
};

export default scoreCardConfig;
