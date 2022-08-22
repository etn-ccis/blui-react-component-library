export type PropsType = {
    propName: string;
    inputType: string;
    inputValue: boolean | string | string[] | [];
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
