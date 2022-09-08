import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const drawerNavGroupConfig: ComponentType = {
    componentName: 'Drawer Nav Group',
    props: [
        {
            propName: 'title',
            inputType: 'string',
            inputValue: 'Brightlayer UI Drawer',
            propType: 'string',
            helperText: 'Text to display in the group header',
            required: false,
        },
        {
            propName: 'titleColor',
            inputType: 'colorPicker',
            inputValue: Colors.black[500],
            propType: 'string',
            helperText: 'Color used for the title text',
            required: false,
        },
        {
            propName: 'titleDivider',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Divider for the title',
            required: false,
            defaultValue: true,
        },
    ],
};

export default drawerNavGroupConfig;
