import { ComponentType } from '../../../__types__';

export const drawerTypes: ComponentType[] = [
    {
        componentName: 'Drawer',
        props: [
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
                propName: 'open',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Controls the open/closed state of the drawer',
                required: true,
            },
            {
                propName: 'noLayout',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Set to true if used without a <DrawerLayout>',
                required: false,
            },
        ],
        otherProps: [
            {
                propName: 'showFooter',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Show / Hide footer',
                required: false,
            },
        ],
    },
];

export default drawerTypes;
