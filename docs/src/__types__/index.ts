export type SliderInputType = {
    min: number;
    max: number;
    step: number;
};

export type PropsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | number | string | string[] | [];
    inputSets?: SliderInputType;
    defaultValue?: string;
    propType: string;
    helperText: string;
    required: boolean;
};

export type ComponentType = {
    componentName: string;
    id?: string;
    parentId?: string;
    props?: PropsType[];
    otherProps?: PropsType[];
};
