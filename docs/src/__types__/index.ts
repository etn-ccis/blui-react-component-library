export type RangeDataTypes = {
    min: number;
    max: number;
    step: number;
};
export type SiteThemeType = 'light' | 'dark' | 'system';

export type AppStatePayloadType = {
    siteTheme: SiteThemeType;
};

export type ComponentDocPayloadType = {
    propName: string;
    propValue: boolean | number | string | string[] | [];
    componentName: string;
    groupType: string;
};

export type PropsType = {
    propName: string;
    inputType: 'boolean' | 'colorPicker' | 'select' | 'string' | 'number';
    inputValue: boolean | number | string | string[] | [];
    defaultValue?: boolean | number | string | string[] | [];
    options?: string[] | [];
    propType: string;
    helperText: string;
    required: boolean;
    rangeData?: RangeDataTypes;
    disabled?: boolean;
    label?: string;
};

export type OtherComponentPropsType = {
    childComponentName: string;
    childComponentProps: PropsType[];
};

export type ComponentType = {
    componentName?: string;
    id?: string;
    props?: PropsType[];
    sharedProps?: PropsType[];
    otherComponentProps?: OtherComponentPropsType;
    otherProps?: PropsType[];
};
