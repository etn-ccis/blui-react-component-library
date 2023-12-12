import { InputConfig } from '@brightlayer-ui/react-doc-components';
import * as Colors from '@brightlayer-ui/colors';

export const sharedPropsConfig: InputConfig = [
    // Shared Props
    {
        id: 'activeItemBackgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: `Background color for the active item`,
        required: false,
        initialValue: Colors.blue[50],
        category: 'Shared Props',
    },
    {
        id: 'activeItemBackgroundShape',
        type: 'select',
        typeLabel: `'round' | 'square'`,
        description: 'Shape of the active item background highlight',
        initialValue: 'square',
        defaultValue: 'square',
        options: ['square', 'round'],
        required: false,
        category: 'Shared Props',
    },
    {
        id: 'activeItemFontColor',
        type: 'color',
        typeLabel: 'string',
        description: `Font color for the active item`,
        required: false,
        initialValue: Colors.blue[500],
        category: 'Shared Props',
    },
    {
        id: 'activeItemIconColor',
        type: 'color',
        typeLabel: 'string',
        description: `Icon color for the active item`,
        required: false,
        initialValue: Colors.blue[500],
        category: 'Shared Props',
    },
    {
        id: 'chevron',
        type: 'boolean',
        description: 'Whether to have chevron for menu items',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
    {
        id: 'chevronColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color override for the chevron icon`,
        required: false,
        initialValue: Colors.gray[500],
        category: 'Shared Props',
    },
    {
        id: 'collapseIcon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'Icon used to collapse drawer items',
        initialValue: 'undefined',
        options: ['undefined', '<Remove />', '<ArrowDropUp />'],
        required: false,
        category: 'Shared Props',
    },
    {
        id: 'disableActiveItemParentStyles',
        type: 'boolean',
        description: 'If true, NavItems will not have a bold title when a child NavItem is selected',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
    {
        id: 'divider',
        type: 'boolean',
        description: 'Whether to show a line between non-nested items',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
    {
        id: 'expandIcon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'Icon used to collapse drawer items',
        initialValue: 'undefined',
        options: ['undefined', '<Add />', '<ArrowDropDown />'],
        required: false,
        category: 'Shared Props',
    },

    {
        id: 'hidePadding',
        type: 'boolean',
        description: 'Whether to hide the paddings reserved for menu item icons',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
    {
        id: 'itemFontColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color for the item text`,
        required: false,
        initialValue: Colors.black[500],
        category: 'Shared Props',
    },
    {
        id: 'itemIconColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color for the item icon`,
        required: false,
        initialValue: Colors.black[500],
        category: 'Shared Props',
    },
    {
        id: 'nestedBackgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: `Background color for nested menu items`,
        required: false,
        initialValue: Colors.white[200],
        category: 'Shared Props',
    },
    {
        id: 'nestedDivider',
        type: 'boolean',
        description: 'Whether to show a line between nested menu items',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
    {
        id: 'ripple',
        type: 'boolean',
        description: 'Whether to apply material ripple effect to items on click',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Shared Props',
    },
];
