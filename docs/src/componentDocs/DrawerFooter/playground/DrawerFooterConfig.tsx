import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const drawerTypes: ComponentType = {
    componentName: 'Drawer Footer',
    props: [
        {
            propName: 'backgroundColor',
            inputType: 'colorPicker',
            inputValue: Colors.white[50],
            propType: 'string',
            helperText: 'The color used for the background',
            required: false,
        },
        {
            propName: 'divider',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Optional divider which appears above footer',
            required: false,
            defaultValue: true,
        },
        {
            propName: 'hideContentOnCollapse',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Hide footer contents when drawer is closed',
            required: false,
            defaultValue: true,
        },
    ],
    otherProps: [
        {
            propName: 'open',
            inputType: 'boolean',
            inputValue: true,
            propType: 'boolean',
            helperText: 'Controls the open/closed state of the drawer',
            required: false,
            label: 'Drawer Open',
        },
    ],
};

export default drawerTypes;
