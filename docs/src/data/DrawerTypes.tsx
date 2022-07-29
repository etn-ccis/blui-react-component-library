export type propsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[];
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
                inputType: 'Select',
                inputValue: ['persistent', 'permanent', 'temporary', 'rail'],
                propType: 'string',
                helperText: 'Drawer variants',
                required: false,
            },
            {
                propName: 'open',
                inputType: 'Boolean',
                inputValue: false,
                propType: 'boolean',
                helperText: 'Controls the open/closed state of the drawer',
                required: true,
            },
        ],
        subComponentsList: [
            {
                componentName: 'Drawer Header',
                props: [
                    {
                        propName: 'backgroundColor',
                        inputType: 'ColorPicker',
                        inputValue: 'red',
                        propType: 'string',
                        helperText: 'The color used for the background',
                        required: false,
                    },
                    {
                        propName: 'icon',
                        inputType: 'Select',
                        inputValue: ['<Menu />', '<FitnessCenter />', 'undefined'],
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
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                ],
            },
            {
                componentName: 'Drawer Nav Group',
                props: [
                    {
                        propName: 'titleColor',
                        inputType: 'ColorPicker',
                        inputValue: 'yellow',
                        propType: 'string',
                        helperText: 'Color used for the background of the element',
                        required: false,
                    },
                    {
                        propName: 'titleDivider',
                        inputType: 'Boolean',
                        inputValue: true,
                        propType: 'boolean',
                        helperText: 'Divider for the title',
                        required: false,
                    },
                ],
            },
        ],
    },
];

export default drawerTypes;
