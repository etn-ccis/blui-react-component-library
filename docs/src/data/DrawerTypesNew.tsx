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
};

// export const drawerTypesNew: { [key: string]: any } =
//     {
//         Drawer: {
//             componentName: 'Drawer',
//             open: {
//                 propName: 'open',
//                 inputType: 'boolean',
//                 inputValue: true,
//                 currentValue: true,
//                 propType: 'boolean',
//                 helperText: 'Controls the open/closed state of the drawer',
//                 required: true,
//             },
//             noLayout: {
//                 propName: 'noLayout',
//                 inputType: 'boolean',
//                 inputValue: true,
//                 currentValue: true,
//                 propType: 'boolean',
//                 helperText: 'Set to true if used without a <DrawerLayout>',
//                 required: false,
//             },
//         },
//         DrawerHeader: {
//             componentName: 'DrawerHeader',
//             title: {
//                 propName: 'title',
//                 inputType: 'string',
//                 inputValue: 'Simple',
//                 currentValue: 'simple',
//                 propType: 'string',
//                 helperText: 'The color used for the background',
//                 required: false,
//             },
//             backgroundColor:{
//                 propName: 'backgroundColor',
//                 inputType: 'ColorPicker',
//                 inputValue: '#ff0000',
//                 currentValue: '#ff0000',
//                 propType: 'string',
//                 helperText: 'The color used for the background',
//                 required: false,
//             },
//         },
//     };

export const drawerTypesNew: componentType[] = [
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
    },
    {
        componentName: 'DrawerHeader',
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
        ],
    },
    {
        componentName: 'DrawerBody',
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
        ],
    },
    {
        componentName: 'DrawerNavGroup',
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
            {
                propName: 'hidePadding',
                inputType: 'boolean',
                inputValue: true,
                currentValue: true,
                propType: 'boolean',
                helperText: 'Divider for the title',
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
                inputValue: 'yellow',
                currentValue: 'yellow',
                propType: 'string',
                helperText: 'Color used for the background of the element',
                required: true,
            },
            {
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
        props: [
            {
                propName: 'title',
                inputType: 'string',
                inputValue: 'red',
                currentValue: 'red',
                propType: 'string',
                helperText: 'Color used for the background of the element',
                required: true,
            },
            {
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
];

export default drawerTypesNew;
