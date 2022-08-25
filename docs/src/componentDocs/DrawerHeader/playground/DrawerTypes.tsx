import { ComponentType } from '../../../__types__';

export const drawerTypes: ComponentType[] = [
    {
        componentName: 'DrawerHeader',
        props: [
            {
                propName: 'backgroundColor',
                inputType: 'colorPicker',
                inputValue: 'red',
                propType: 'string',
                helperText: `The color used for the background`,
                required: false,
            },
            {
                propName: 'backgroundImage',
                inputType: 'string',
                inputValue: '',
                propType: 'string',
                helperText: `An image to display in the header`,
                required: false,
            },
        ],
    },
];

export default drawerTypes;
