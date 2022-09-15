import { ComponentType } from '../../../__types__';

export const emptyStateConfig: ComponentType = {
    componentName: 'Empty State',
    props: [
        {
            propName: 'icon',
            inputType: 'select',
            inputValue: '<Devices />',
            options: ['<Devices />', '<Device />'],
            propType: 'ReactNode',
            helperText: 'The primary icon',
            required: true,
            defaultValue: '<Devices />',
        },
        {
            propName: 'description',
            inputType: 'string',
            inputValue: 'Check your network connection',
            propType: 'ReactNode',
            helperText: 'The secondary text to display',
            required: false,
        },
        {
            propName: 'title',
            inputType: 'string',
            inputValue: 'No Devices',
            propType: 'ReactNode',
            helperText: 'The main text to display',
            required: true,
        },
    ],
    otherProps: [
        {
            propName: 'showAction',
            inputType: 'boolean',
            inputValue: false,
            propType: 'boolean',
            helperText: 'Whether to show action section or not',
            required: false,
        },
    ],
};

export default emptyStateConfig;
