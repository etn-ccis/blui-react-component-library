export type propsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[] | [];
    defaultValue?: string;
    propType: string;
    helperText: string;
    required: boolean;
};

export type nestedChildrenType = {
    nestedChildrenProps: propsType[];
    nestedComponets: componentType[];
};

export type componentType = {
    componentName: string;
    props?: propsType[];
    nestedChildren?: nestedChildrenType[];
};

export const drawerTypes: componentType[] = [
    {
        componentName: 'Drawer',
        props: [
            {
                propName: 'variant',
                inputType: 'select',
                inputValue: ['persistent', 'permanent', 'temporary', 'rail'],
                defaultValue: 'permanent',
                propType: 'string',
                helperText: 'Drawer variants',
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
    },
    {
        componentName: 'DrawerHeader',
        props: [
            {
                propName: 'title',
                inputType: 'string',
                inputValue: 'Simple',
                propType: 'string',
                helperText: 'The color used for the background',
                required: false,
            },
            {
                propName: 'backgroundColor',
                inputType: 'colorPicker',
                inputValue: '#007bc1',
                propType: 'string',
                helperText: 'The color used for the background',
                required: false,
            },
            {
                propName: 'divider',
                inputType: 'boolean',
                inputValue: false,
                propType: 'boolean',
                helperText: 'Controls the hide/show divider',
                required: false,
            },
        ],
    },
    {
        componentName: 'DrawerBody',
        props: [
            {
                propName: 'backgroundColor',
                inputType: 'colorPicker',
                inputValue: 'white',
                propType: 'string',
                helperText: 'Color used for the background of the element',
                required: false,
            },
        ],
    },
    {
        componentName: 'DrawerNavGroup',
        nestedChildren: [
            {
                nestedChildrenProps: [
                    {
                        propName: 'title',
                        inputType: 'string',
                        inputValue: 'Nav Group 1',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'titleColor',
                        inputType: 'colorPicker',
                        inputValue: '#007bc1',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'titleDivider',
                        inputType: 'boolean',
                        inputValue: true,
                        propType: 'boolean',
                        helperText: 'Divider for the title',
                        required: false,
                    },
                    {
                        propName: 'hidePadding',
                        inputType: 'boolean',
                        inputValue: true,
                        propType: 'boolean',
                        helperText: 'Divider for the title',
                        required: false,
                    },
                ],
                nestedComponets: [
                    {
                        componentName: 'DrawerNavItem',
                        props: [
                            {
                                propName: 'title',
                                inputType: 'string',
                                inputValue: 'DrawerNavItem 1',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                            {
                                propName: 'itemId',
                                inputType: 'string',
                                inputValue: '1',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                        ],
                    },
                    {
                        componentName: 'DrawerNavItem',
                        props: [
                            {
                                propName: 'title',
                                inputType: 'string',
                                inputValue: 'DrawerNavItem 11',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                            {
                                propName: 'itemId',
                                inputType: 'string',
                                inputValue: '11',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                        ],
                    },
                ],
            },
            {
                nestedChildrenProps: [
                    {
                        propName: 'title',
                        inputType: 'string',
                        inputValue: 'Nav Group 2',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'titleColor',
                        inputType: 'colorPicker',
                        inputValue: '#007bc1',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'titleDivider',
                        inputType: 'boolean',
                        inputValue: true,
                        propType: 'boolean',
                        helperText: 'Divider for the title',
                        required: false,
                    },
                    {
                        propName: 'hidePadding',
                        inputType: 'boolean',
                        inputValue: true,
                        propType: 'boolean',
                        helperText: 'Divider for the title',
                        required: false,
                    },
                ],
                nestedComponets: [
                    {
                        componentName: 'DrawerNavItem',
                        props: [
                            {
                                propName: 'title',
                                inputType: 'string',
                                inputValue: 'DrawerNavItem 2',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                            {
                                propName: 'itemId',
                                inputType: 'string',
                                inputValue: '2',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                        ],
                    },
                    {
                        componentName: 'DrawerNavItem',
                        props: [
                            {
                                propName: 'title',
                                inputType: 'string',
                                inputValue: 'DrawerNavItem 22',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                            {
                                propName: 'itemId',
                                inputType: 'string',
                                inputValue: '22',
                                propType: 'string',
                                helperText: 'The color used for the background',
                                required: false,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default drawerTypes;
