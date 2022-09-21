import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const drawerRailItemConfig: ComponentType = {
    componentName: 'Drawer Rail Item',
    props: [
        {
            propName: 'condensed',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Show condensed nav items without labels (rail variant only)',
            required: false,
            defaultValue: false,
        },
        {
            propName: 'disableRailTooltip',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Sets whether to disable the tooltip on hover',
            required: false,
            defaultValue: false,
        },
        {
            propName: 'hidden',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Sets whether to hide the rail item',
            required: false,
            defaultValue: false,
        },
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<Device />',
            options: ['<Device />', '<Devices />'],
            propType: 'JSX.Element',
            helperText: 'A component to render for the left icon',
            required: true,
            defaultValue: '<Device />',
        },
        {
            propName: 'statusColor',
            inputType: 'colorPicker',
            inputValue: '#ffac00',
            propType: 'string',
            helperText: 'Status stripe and icon color',
            required: false,
        },
        {
            propName: 'title',
            inputType: 'string',
            inputValue: 'Title',
            propType: 'string',
            helperText: 'The text to show on the first line',
            required: true,
        },
    ],
    sharedProps: [
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
            inputValue: Colors.blue[500],
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
            defaultValue: false,
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
            defaultValue: true,
        },
    ],
};

export default drawerRailItemConfig;
