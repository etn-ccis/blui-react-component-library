import { ComponentType } from '../../../__types__';

export const drawerSubheaderTypes: ComponentType = {
    componentName: 'Drawer Subheader',
    props: [
        {
            propName: 'divider',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Optional divider which appears below the Subheader',
            required: false,
            defaultValue: true,
        },
        {
            propName: 'hideContentOnCollapse',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Hide subheader contents when drawer is closed',
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
        },
        {
            propName: 'content',
            inputType: 'select',
            inputValue: 'Filter',
            options: ['Filter', 'Accordion'],
            propType: 'string',
            helperText: 'Content to show inside Subheader section',
            required: false,
        },
    ],
};

export default drawerSubheaderTypes;
