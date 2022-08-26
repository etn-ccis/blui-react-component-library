import { ComponentType } from '../../../__types__';
import { sharedPropsTypes } from '../../../shared/data/SharedPropsTypes';

export const drawerTypes: ComponentType[] = [
    {
        componentName: 'Drawer',
        props: [
            {
                propName: 'activeItem',
                inputType: 'string',
                inputValue: 'Devices',
                propType: 'string',
                helperText: `itemID for the 'active' item`,
                required: false,
            },
            {
                propName: 'condensed',
                inputType: 'boolean',
                inputValue: false,
                propType: 'boolean',
                helperText: `Show condensed nav items without labels (rail variant only)`,
                required: false,
            },
            {
                propName: 'noLayout',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Set to true if used without a <DrawerLayout>. Default value is false',
                required: false,
                disable: true,
            },
            {
                propName: 'open',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Controls the open/closed state of the drawer',
                required: true,
            },
            {
                propName: 'openOnHover',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Automatically open the drawer on hover when closed (persistent variant only)',
                required: false,
            },
            {
                propName: 'openOnHoverDelay',
                inputType: 'number',
                inputValue: 500,
                propType: 'number',
                helperText: 'Delay (ms) before triggering open on hover (persistent variant only)',
                required: false,
                rangeData: {
                    min: 100,
                    max: 1000,
                    step: 100,
                },
            },
            {
                propName: 'sideBorder',
                inputType: 'boolean',
                inputValue: false,
                propType: 'boolean',
                helperText: 'Whether to use a side border for the drawer instead of a shadow',
                required: false,
            },
            {
                propName: 'variant',
                inputType: 'select',
                inputValue: ['persistent', 'permanent', 'temporary', 'rail'],
                defaultValue: 'permanent',
                propType: 'string',
                helperText: `The variant to use from options 'persistent', 'permanent', 'temporary', 'rail'`,
                required: false,
            },
            {
                propName: 'width',
                inputType: 'number',
                inputValue: 350,
                propType: 'number | string',
                helperText: 'Sets the width of the drawer when open. Default value is 22.5rem (360px)',
                required: false,
                rangeData: {
                    min: 200,
                    max: 700,
                    step: 50,
                },
            },
        ],
        otherProps: sharedPropsTypes,
    },
];

export default drawerTypes;
