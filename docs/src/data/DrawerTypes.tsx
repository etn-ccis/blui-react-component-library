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
    componentName: string;
    props: propsType[];
    subComponentsList?: componentType[];
};

export const drawerTypes: componentType[] = [
    {
        componentName: 'Drawer',
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
        ],
        subComponentsList: [
            {
                componentName: 'DrawerHeader',
                props: [
                    {
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: 'red',
                        currentValue: 'red',
                        propType: 'string',
                        helperText: 'The color used for the background',
                        required: false,
                    },
                    {
                        propName: 'icon',
                        inputType: 'select',
                        inputValue: ['<Menu />', '<FitnessCenter />', 'undefined'],
                        currentValue: '<Menu />',
                        propType: 'ReactNode',
                        helperText: 'A component to render for the icon',
                        required: false,
                    },
                ],
            },
            {
                componentName: 'Drawer Body',
                props: [
                    {
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: 'green',
                        currentValue: 'green',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                ],
                subComponentsList: [
                    {
                        componentName: 'Drawer Nav Group',
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
                                componentName: 'Drawer Nav Item',
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
