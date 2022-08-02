export type propsType = {
    key: string;
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
                key: 'drawer-variant',
                propName: 'variant',
                inputType: 'select',
                inputValue: ['persistent', 'permanent', 'temporary', 'rail'],
                currentValue: 'permanent',
                propType: 'string',
                helperText: 'Drawer variants',
                required: false,
            },
            {
                key: 'drawer-open',
                propName: 'open',
                inputType: 'boolean',
                inputValue: true,
                currentValue: true,
                propType: 'boolean',
                helperText: 'Controls the open/closed state of the drawer',
                required: true,
            },
            {
                key: 'drawer-noLayout',
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
                key: 'drawerHeader1',
                props: [
                    {
                        key: 'DrawerHeader-title',
                        propName: 'title',
                        inputType: 'string',
                        inputValue: 'Simple',
                        currentValue: 'simple',
                        propType: 'string',
                        helperText: 'The color used for the background',
                        required: false,
                    },
                    {
                        key: 'DrawerHeader-backgroundColor',
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
                key: 'drawerBody1',
                props: [
                    {
                        key: 'drawerBody-backgroundColor',
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: 'white',
                        currentValue: 'white',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        key: 'drawerBody-className',
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
                        key: 'drawerNavGroup1',
                        props: [
                            {
                                key: 'drawerNavGroup-titleColor',
                                propName: 'titleColor',
                                inputType: 'ColorPicker',
                                inputValue: 'yellow',
                                currentValue: 'yellow',
                                propType: 'string',
                                helperText: 'Color used for the background of the element',
                                required: false,
                            },
                            {
                                key: 'drawerNavGroup-titleDivider',
                                propName: 'titleDivider',
                                inputType: 'boolean',
                                inputValue: true,
                                currentValue: true,
                                propType: 'boolean',
                                helperText: 'Divider for the title',
                                required: false,
                            },
                            {
                                key: 'drawerNavGroup-hidePadding',
                                propName: 'hidePadding',
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
                                key: 'drawerNavItem1',
                                props: [
                                    {
                                        key: 'drawerNavItem-title',
                                        propName: 'title',
                                        inputType: 'string',
                                        inputValue: 'yellow',
                                        currentValue: 'yellow',
                                        propType: 'string',
                                        helperText: 'Color used for the background of the element',
                                        required: true,
                                    },
                                    {
                                        key: 'drawerNavItem-itemID',
                                        propName: 'itemID',
                                        inputType: 'string',
                                        inputValue: '1',
                                        currentValue: '1',
                                        propType: 'string',
                                        helperText: 'Color used for the background of the element',
                                        required: true,
                                    },
                                ],
                            },
                            {
                                componentName: 'DrawerNavItem',
                                key: 'drawerNavItem2',
                                props: [
                                    {
                                        key: 'drawerNavItem2-title',
                                        propName: 'title',
                                        inputType: 'string',
                                        inputValue: 'yellow',
                                        currentValue: 'yellow',
                                        propType: 'string',
                                        helperText: 'Color used for the background of the element',
                                        required: true,
                                    },
                                    {
                                        key: 'drawerNavItem2-itemID',
                                        propName: 'itemID',
                                        inputType: 'string',
                                        inputValue: '2',
                                        currentValue: '2',
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
