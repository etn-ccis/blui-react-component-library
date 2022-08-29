export type RangeDataTypes = {
    min: number;
    max: number;
    step: number;
};

export type PayloadType = {
    propName: string;
    propValue: boolean | number | string | string[] | [];
    componentName: string;
    groupType: string;
};

export type PropsType = {
    propName: string;
    inputType: 'boolean' | 'colorPicker' | 'select' | 'string' | 'number';
    inputValue: boolean | number | string | string[] | [];
    options?: string[] | [];
    propType: string;
    helperText: string;
    required: boolean;
    rangeData?: RangeDataTypes;
    disable?: boolean;
};

export type ComponentType = {
    componentName?: string;
    id?: string;
    parentId?: string;
    props?: PropsType[];
    otherProps?: PropsType[];
    sharedProps?: PropsType[];
};
