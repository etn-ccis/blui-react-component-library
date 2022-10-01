import { ComponentType } from '../../../__types__';

export const appBarConfig: ComponentType = {
    componentName: 'App Bar',
    props: [
        {
            propName: 'animationDuration',
            inputType: 'number',
            inputValue: 300,
            propType: 'number',
            helperText: 'Length of the collapse / expand animation (ms)',
            required: false,
            rangeData: {
                min: 100,
                max: 1000,
                step: 100,
            },
        },
        {
            propName: 'backgroundImage',
            inputType: 'select',
            inputValue: 'undefined',
            options: ['undefined', 'Farm'],
            propType: 'string',
            helperText: 'Image to use as the app bar background',
            required: false,
            defaultValue: 'undefined',
        },
        {
            propName: 'collapsedHeight',
            inputType: 'number',
            inputValue: 64,
            propType: 'number | string',
            helperText: 'Height of the AppBar when collapsed',
            required: false,
            rangeData: {
                min: 50,
                max: 100,
                step: 10,
            },
            defaultValue: 64,
        },
        {
            propName: 'expandedHeight',
            inputType: 'number',
            inputValue: 200,
            propType: 'number | string',
            helperText: 'Height of the AppBar when expanded',
            required: false,
            rangeData: {
                min: 100,
                max: 240,
                step: 10,
            },
            defaultValue: 200,
        },
        {
            propName: 'scrollContainerId',
            inputType: 'string',
            inputValue: 'appbarBodyFiller1',
            propType: 'string',
            helperText: 'ID of the scrollable element',
            required: false,
            disable: true,
        },
        {
            propName: 'scrollThreshold',
            inputType: 'number',
            inputValue: 136,
            propType: 'number | string',
            helperText: 'Distance to scroll before collapsing the app bar',
            required: false,
            rangeData: {
                min: 100,
                max: 200,
                step: 10,
            },
            defaultValue: 136,
        },
        {
            propName: 'variant',
            inputType: 'select',
            inputValue: 'snap',
            options: ['expanded', 'collapsed', 'snap'],
            propType: 'string',
            helperText: 'Behavior of the App Bar',
            required: false,
            defaultValue: 'snap',
        },
    ],
};

export default appBarConfig;
