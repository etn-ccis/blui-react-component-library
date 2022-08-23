import { PropsType } from '../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const sharedPropsTypes: PropsType[] = [
    {
        propName: 'activeItemBackgroundColor',
        inputType: 'colorPicker',
        inputValue: Colors.blue[50],
        propType: 'string',
        helperText: `Background color for the 'active' item`,
        required: false,
    },
    {
        propName: 'activeItemFontColor',
        inputType: 'colorPicker',
        inputValue: Colors.blue[500],
        propType: 'string',
        helperText: `Font color for the 'active' item`,
        required: false,
    },
    {
        propName: 'activeItemIconColor',
        inputType: 'colorPicker',
        inputValue: Colors.blue[500],
        propType: 'string',
        helperText: `Icon color for the 'active' item`,
        required: false,
    },
    {
        propName: 'backgroundColor',
        inputType: 'colorPicker',
        inputValue: Colors.white[50],
        propType: 'string',
        helperText: 'Color used for the background of the element',
        required: false,
    },
    {
        propName: 'divider',
        inputType: 'boolean',
        inputValue: false,
        propType: 'boolean',
        helperText: 'Whether to show a line between all items',
        required: false,
    },
    {
        propName: 'itemFontColor',
        inputType: 'colorPicker',
        inputValue: Colors.black[500],
        propType: 'string',
        helperText: 'The color used for the item text',
        required: false,
    },
    {
        propName: 'itemIconColor',
        inputType: 'colorPicker',
        inputValue: Colors.black[500],
        propType: 'string',
        helperText: 'The color used for the icon',
        required: false,
    },
    {
        propName: 'ripple',
        inputType: 'boolean',
        inputValue: true,
        propType: 'boolean',
        helperText: 'Whether to apply material ripple effect to items on click',
        required: false,
    },
];

export default sharedPropsTypes;
