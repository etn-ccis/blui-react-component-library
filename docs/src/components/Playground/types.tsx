export type RangeData = {
    min: number;
    max: number;
    step: number;
};

export type Payload = {
    propName: string;
    propValue: boolean | number | string | string[] | [];
    componentName: string;
    groupType: string;
};

export type PlaygroundComponentProp = {
    propName: string;
    inputType: 'boolean' | 'colorPicker' | 'select' | 'string' | 'number';
    inputValue: boolean | number | string | string[] | [];
    defaultValue?: boolean | number | string | string[] | [];
    options?: string[] | [];
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
    additionalProps?: PlaygroundComponentProp[];
};
