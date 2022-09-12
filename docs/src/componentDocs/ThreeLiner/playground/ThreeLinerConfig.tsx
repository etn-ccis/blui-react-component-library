import { ComponentType } from '../../../__types__';

export const threeLinerConfig: ComponentType = {
    componentName: 'Three Liner',
    props: [
        {
            propName: 'info',
            inputType: 'string',
            inputValue: 'info',
            propType: 'string',
            helperText: 'Third line content',
            required: false,
        },
        {
            propName: 'subtitle',
            inputType: 'string',
            inputValue: 'subtitle',
            propType: 'string',
            helperText: 'Second line content',
            required: false,
        },
        {
            propName: 'title',
            inputType: 'string',
            inputValue: 'title',
            propType: 'string',
            helperText: 'First line content',
            required: false,
        },
    ],
};

export default threeLinerConfig;
