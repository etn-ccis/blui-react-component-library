export type listItemTagPropItem = {
    inputType: string;
    fieldName: string;
    inputText: string;
    label: string;
    helperText: string;
    fontColor?:string;
    backgroundColor?:string;
};
export type componentType = {
    componentName: string,
    children: listItemTagPropItem[],
};

export const listItemTagJson: componentType[] = [{
    componentName: 'ListItemTag',
    children: [
        {
            inputType: 'Input',
            fieldName: 'label',
            inputText: "In Progress",
            label: 'Label',
            helperText: 'The label text',
        },
        {
            inputType: 'Input',
            fieldName: 'fontColor',
            inputText: "white",
            fontColor: 'white',
            label: 'Font Color',
            helperText: 'Color of the label',
        },
        {
            inputType: 'Input',
            fieldName: 'backgroundColor',
            inputText: "#1e90ff",
            backgroundColor: '#1e90ff',
            label: 'Background Color',
            helperText: 'Color of the label background',
        },
    ]
}];

export default listItemTagJson;