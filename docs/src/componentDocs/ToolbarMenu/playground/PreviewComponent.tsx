import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';

export const PreviewComponent = (): JSX.Element => {
    const toolbarMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.toolbarMenuComponent);

    const toolbarMenuProps = createProps(toolbarMenuJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(toolbarMenuJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<ToolbarMenu
    ${toggleDefaultProp('icon', toolbarMenuProps.icon)}
    label={"${toolbarMenuProps.label}"}
    menuGroups={
        {
            items: [{ title: "Menu Item 1", onClick: (): void => {
                console.log("clicked 1");
            } }, { title: "Menu Item 2", onClick: (): void => {
                console.log("clicked 2");
            } }, { title: "Menu Item 3", onClick: (): void => {
                console.log("clicked 3");
            } }],
        },
    ]} />`;
        return removeEmptyLines(jsx);
    };
    const menuGroups = [
        {
            items: [
                {
                    title: 'Menu Item 1',
                    onClick: (): void => {},
                },
                {
                    title: 'Menu Item 2',
                    onClick: (): void => {},
                },
                {
                    title: 'Menu Item 3',
                    onClick: (): void => {},
                },
            ],
        },
    ];

    return (
        <PreviewComponentWithCode
            previewContent={
                <ToolbarMenu
                    icon={getIcon(toolbarMenuProps.icon)}
                    label={toolbarMenuProps.label}
                    menuGroups={menuGroups}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
