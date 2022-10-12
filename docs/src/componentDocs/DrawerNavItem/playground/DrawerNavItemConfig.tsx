import { ComponentType } from '../../../__types__';
import sharedPropsConfig from '../../../shared/data/SharedPropsConfig';

export const drawerNavItemConfig: ComponentType = {
    componentName: 'Drawer Nav Item',
    props: [
        {
            propName: 'hidden',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Sets whether to hide the nav item',
            required: false,
            defaultValue: false,
        },
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: 'undefined',
            options: ['undefined', '<Home />'],
            propType: 'JSX.Element',
            helperText: 'A component to render for the left icon',
            required: false,
            defaultValue: 'undefined',
        },
        {
            propName: 'itemID',
            inputType: 'string',
            inputValue: 'Monthly Report',
            propType: 'string',
            helperText: `itemID for the 'active' item`,
            required: true,
            disable: true,
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
            propName: 'subtitle',
            inputType: 'string',
            inputValue: 'Subtitle',
            propType: 'string',
            helperText: 'The text to show on the second line',
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
    sharedProps: sharedPropsConfig,
};

export default drawerNavItemConfig;
