export type RangeDataTypes = {
    min: number;
    max: number;
    step: number;
};

export type PropsType = {
    propName: string;
    inputType: 'boolean' | 'colorPicker' | 'select' | 'string' | 'number';
    inputValue: boolean | number | string | string[] | [];
    defaultValue?: string;
    propType: string;
    helperText: string;
    required: boolean;
    rangeData?: RangeDataTypes;
    disable?: boolean;
};

export type ComponentType = {
    componentName: string;
    id?: string;
    parentId?: string;
    props?: PropsType[];
    otherProps?: PropsType[];
};
