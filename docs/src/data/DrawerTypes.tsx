export type propsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[] | [];
    defaultValue?: string;
    propType: string;
    helperText: string;
    required: boolean;
};

export type componentType = {
    componentName: string;
    id?: string;
    parentId?: string;
    props?: propsType[];
    otherProps?: propsType[];
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
        id: 'DrawerNavGroup-0',
        props: [
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
    },
    {
        componentName: 'DrawerNavGroup',
        id: 'DrawerNavGroup-1',
        props: [
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
    },
    {
        componentName: 'DrawerNavItem',
        parentId: 'DrawerNavGroup-0',
        id: 'DrawerNavItem-0',
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
        parentId: 'DrawerNavGroup-1',
        id: 'DrawerNavItem-1',
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
        parentId: 'DrawerNavGroup-1',
        id: 'DrawerNavItem-2',
        props: [
            {
                propName: 'title',
                inputType: 'string',
                inputValue: 'DrawerNavItem 3',
                propType: 'string',
                helperText: 'The color used for the background',
                required: false,
            },
            {
                propName: 'itemId',
                inputType: 'string',
                inputValue: '3',
                propType: 'string',
                helperText: 'The color used for the background',
                required: false,
            },
        ],
    },
    {
        componentName: 'DrawerFooter',
        props: [
            {
                propName: 'hideContentOnCollapse',
                inputType: 'boolean',
                inputValue: true,
                propType: 'boolean',
                helperText: 'Hide subheader contents when drawer is closed',
                required: false,
            },
            {
                propName: 'backgroundColor',
                inputType: 'colorPicker',
                inputValue: '#ffffff',
                propType: 'string',
                helperText: 'The color used for the background',
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
