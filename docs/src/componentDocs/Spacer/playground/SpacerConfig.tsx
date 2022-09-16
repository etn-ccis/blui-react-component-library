import { ComponentType } from '../../../__types__';

export const spacerConfig: ComponentType = {
    componentName: 'Spacer',
    props: [
        {
            propName: 'flex',
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
            defaultValue: 1,
        },
        {
            propName: 'height',
            inputType: 'number',
            inputValue: 60,
            propType: 'number | string',
            helperText: 'Height (in px) for static layouts',
            required: false,
            rangeData: {
                min: 20,
                max: 100,
                step: 20,
            },
        },
        {
            propName: 'width',
            inputType: 'number',
            inputValue: 60,
            propType: 'number | string',
            helperText: 'Width (in px) for static layouts',
            required: false,
            rangeData: {
                min: 20,
                max: 100,
                step: 20,
            },
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
        },
    ],
};

export default spacerConfig;
