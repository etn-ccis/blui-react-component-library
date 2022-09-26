import { ComponentType } from '../../../__types__';

export const toolbarMenuConfig: ComponentType = {
    componentName: 'Toolbar Menu',
    props: [
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: 'undefined',
            options: ['undefined', '<Home />', '<Place />'],
            propType: 'JSX.Element',
            helperText: 'The inline icon to display',
            required: false,
            defaultValue: 'undefined',
        },
        {
            propName: 'label',
            inputType: 'string',
            inputValue: 'Subtitle',
            propType: 'ReactNode',
            helperText: 'Custom content for label text / icon + label',
            required: true,
            defaultValue: true,
        },
    ],
};

export default toolbarMenuConfig;
