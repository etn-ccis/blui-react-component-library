import { ComponentType } from '../../../__types__';

export const spacerConfig: ComponentType = {
    componentName: 'Spacer',
    props: [
        {
            propName: 'flex1',
            inputType: 'number',
            inputValue: 1,
            propType: 'number',
            helperText: 'Flex grow/shrink value for flex layouts',
            required: false,
            rangeData: {
                min: 1,
                max: 5,
                step: 1,
            },
            label: 'Item 1 Flex',
        },
        {
            propName: 'flex2',
            inputType: 'number',
            inputValue: 1,
            propType: 'number',
            helperText: 'Flex grow/shrink value for flex layouts',
            required: false,
            rangeData: {
                min: 1,
                max: 5,
                step: 1,
            },
            label: 'Item 2 Flex',
        },
        {
            propName: 'flex3',
            inputType: 'number',
            inputValue: 1,
            propType: 'number',
            helperText: 'Flex grow/shrink value for flex layouts',
            required: false,
            rangeData: {
                min: 1,
                max: 5,
                step: 1,
            },
            label: 'Item 3 Flex',
        },
        {
            propName: 'size1',
            inputType: 'number',
            inputValue: 60,
            propType: 'number | string',
            helperText: 'Set Width / Height (in px) for static layouts',
            required: false,
            rangeData: {
                min: 20,
                max: 100,
                step: 20,
            },
            label: 'Item 1 Size (px)',
        },
        {
            propName: 'size2',
            inputType: 'number',
            inputValue: 60,
            propType: 'number | string',
            helperText: 'Set Width / Height (in px) for static layouts',
            required: false,
            rangeData: {
                min: 20,
                max: 100,
                step: 20,
            },
            label: 'Item 2 Size (px)',
        },
        {
            propName: 'size3',
            inputType: 'number',
            inputValue: 60,
            propType: 'number | string',
            helperText: 'Set Width / Height (in px) for static layouts',
            required: false,
            rangeData: {
                min: 20,
                max: 100,
                step: 20,
            },
            label: 'Item 3 Size (px)',
        },
    ],
    otherProps: [
        {
            propName: 'useFlex',
            inputType: 'boolean',
            inputValue: true,
            propType: 'boolean',
            helperText: 'Show spacer with flex layout',
            required: false,
            label: 'Use Flex Layout',
        },
    ],
};

export default spacerConfig;
