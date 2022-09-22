import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';

import * as Colors from '@brightlayer-ui/colors';

export const PreviewComponent = (): JSX.Element => {
    const toolbarMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.toolbarMenuComponent);

    const toolbarMenuProps = createProps(toolbarMenuJson.props as PropsType[]);

    const iterateIconProps = (iconProps: any): string => {
        let str = '';
        for (const prop in iconProps) {
            str = `${str}` + `${prop}="${iconProps[prop]}" `;
        }
        return str;
    };

    const getIconWithProp = (icon: string, iconProps: any): any => {
        const index = icon.lastIndexOf('/>');
        const result = icon.slice(0, index) + iterateIconProps(iconProps) + icon.slice(index);
        return result;
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<ToolbarMenu
    icon={${getIconWithProp(toolbarMenuProps.icon, { htmlColor: `${Colors.green[500]}` })}}
    label={"${toolbarMenuProps.label}"}
    menuGroups={
        {
            items: [
                { title: 'Menu Item 1' },
                { title: 'Menu Item 2' },
                { title: 'Menu Item 3' },
            ],
        },
    ]} />`;
        return removeEmptyLines(jsx);
    };
    const menuGroups = [
        {
            items: [{ title: 'Menu Item 1' }, { title: 'Menu Item 2' }, { title: 'Menu Item 3' }],
        },
    ];

    return (
        <PreviewComponentWithCode
            previewContent={
                <ToolbarMenu
                    icon={getIcon(toolbarMenuProps.icon, { htmlColor: Colors.green[500] })}
                    label={toolbarMenuProps.label}
                    menuGroups={menuGroups}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
