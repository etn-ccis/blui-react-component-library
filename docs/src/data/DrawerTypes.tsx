export type propsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[];
    currentValue: boolean | string | string[];
    propType: string;
    helperText: string;
    required: boolean;
};

export type componentType = {
    key: string;
    componentName: string;
    props: propsType[];
    subComponentsList?: componentType[];
};

export const drawerTypes: componentType[] = [
    {
        componentName: 'Drawer',
        key: 'drawer',
        props: [
            {
                propName: 'variant',
                inputType: 'select',
                inputValue: ['persistent', 'permanent', 'temporary', 'rail'],
                currentValue: 'permanent',
                propType: 'string',
                helperText: 'Drawer variants',
                required: false,
            },
            {
                propName: 'open',
                inputType: 'boolean',
                inputValue: true,
                currentValue: true,
                propType: 'boolean',
                helperText: 'Controls the open/closed state of the drawer',
                required: true,
            },
            {
                propName: 'noLayout',
                inputType: 'boolean',
                inputValue: true,
                currentValue: true,
                propType: 'boolean',
                helperText: 'Set to true if used without a <DrawerLayout>',
                required: false,
            },
        ],
        subComponentsList: [
            {
                componentName: 'DrawerHeader',
                key:'drawerHeader',
                props: [
                    {
                        propName: 'title',
                        inputType: 'string',
                        inputValue: 'Simple',
                        currentValue: 'simple',
                        propType: 'string',
                        helperText: 'The color used for the background',
                        required: false,
                    },
                    {
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: '#ff0000',
                        currentValue: '#ff0000',
                        propType: 'string',
                        helperText: 'The color used for the background',
                        required: false,
                    },
                    // {
                    //     propName: 'icon',
                    //     inputType: 'select',
                    //     inputValue: ['<Menu />', '<FitnessCenter />', 'undefined'],
                    //     currentValue: '<Menu />',
                    //     propType: 'ReactNode',
                    //     helperText: 'A component to render for the icon',
                    //     required: false,
                    // },
                ],
            },
            {
                componentName: 'DrawerBody',
                key:'drawerBody',
                props: [
                    {
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: 'white',
                        currentValue: 'white',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'className',
                        inputType: 'string',
                        inputValue: 'drawerBodyStyle',
                        currentValue: 'drawerBodyStyle',
                        propType: 'string',
                        helperText: 'Drawer variants',
                        required: false,
                    },
                ],
                subComponentsList: [
                    {
                        componentName: 'DrawerNavGroup',
                        key:'drawerNavGroup',
                        props: [
                            {
                                propName: 'titleColor',
                                inputType: 'ColorPicker',
                                inputValue: 'yellow',
                                currentValue: 'yellow',
                                propType: 'string',
                                helperText: 'Color used for the background of the element',
                                required: false,
                            },
                            {
                                propName: 'titleDivider',
                                inputType: 'boolean',
                                inputValue: true,
                                currentValue: true,
                                propType: 'boolean',
                                helperText: 'Divider for the title',
                                required: false,
                            },
                        ],
                        subComponentsList: [
                            {
                                componentName: 'DrawerNavItem',
                                key:'drawerNavItem',
                                props: [
                                    {
                                        propName: 'title',
                                        inputType: 'string',
                                        inputValue: 'yellow',
                                        currentValue: 'yellow',
                                        propType: 'string',
                                        helperText: 'Color used for the background of the element',
                                        required: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default drawerTypes;
