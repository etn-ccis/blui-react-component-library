import { ComponentType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';

export const listItemTagConfig: ComponentType = {
    componentName: 'List Item Tag',
    props: [
        {
            propName: 'backgroundColor',
            inputType: 'colorPicker',
            inputValue: Colors.red[500],
            propType: 'string',
            helperText: 'Color of the label background',
            required: false,
        },
        {
            propName: 'fontColor',
            inputType: 'colorPicker',
            inputValue: Colors.white[50],
            propType: 'string',
            helperText: 'Color of the label',
            required: false,
        },
        {
            propName: 'label',
            inputType: 'string',
            inputValue: 'active',
            propType: 'string',
            helperText: 'The label text',
            required: true,
        },
    ],
};

export default listItemTagConfig;
