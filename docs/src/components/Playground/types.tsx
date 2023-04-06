import { ReactNode } from 'react';

export type RangeData = {
    min: number;
    max: number;
    step: number;
};

export type PlaygroundComponentProp = {
    propName: string;
    inputType: 'boolean' | 'colorPicker' | 'select' | 'string' | 'number';
    inputValue: boolean | number | string | string[] | [];
    defaultValue?: boolean | number | string | string[] | [];
    options?: string[] | [];
    // values to use for the items provided in the `options` prop
    optionsValueMapping?: ReactNode[] | [];
    propType: string;
    helperText: string;
    required: boolean;
    rangeData?: RangeData;
    disabled?: boolean;
    label?: string;
};

export type ChildComponent = {
    childComponentName: string;
    childComponentProps: PlaygroundComponentProp[];
};

export type PlaygroundComponent = {
    componentName?: string;
    id?: string;
    props?: PlaygroundComponentProp[];
    sharedProps?: PlaygroundComponentProp[];
    childComponent?: ChildComponent;
    // @TODO: either remove these or we need to extend the type definition so we know which component this belongs to
    additionalProps?: PlaygroundComponentProp[];
};
