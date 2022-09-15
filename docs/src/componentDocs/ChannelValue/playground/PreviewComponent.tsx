import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ChannelValue } from '@brightlayer-ui/react-components/core/ChannelValue';

export const PreviewComponent = (): JSX.Element => {
    const channelValueJson = useAppSelector((state: RootState) => state.componentsPropsState.channelValueComponent);

    const channelValueProps = createProps(channelValueJson.props as PropsType[]);
    const otherProps = createProps(channelValueJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(channelValueJson, propName, currentValue, 'props');

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

    const toggleIconProp = (icon: string): string => {
        if (icon === 'undefined') {
            return toggleDefaultProp('icon', channelValueProps.icon);
        }
        return `icon={${getIconWithProp(channelValueProps.icon, {
            fontSize: 'inherit',
            htmlColor: `${otherProps.htmlColor}`,
        })}}`;
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<ChannelValue
    color={"${channelValueProps.color}"}
    fontSize={"${channelValueProps.fontSize}"}
    ${toggleIconProp(channelValueProps.icon)}
    ${toggleDefaultProp('prefix', channelValueProps.prefix)}
    ${toggleDefaultProp('units', channelValueProps.units)}
    ${toggleDefaultProp('unitSpace', channelValueProps.unitSpace)}
    value={"${channelValueProps.value}"}
/>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <ChannelValue
                    color={channelValueProps.color}
                    fontSize={channelValueProps.fontSize}
                    icon={getIcon(channelValueProps.icon, { fontSize: 'inherit', htmlColor: otherProps.htmlColor })}
                    prefix={channelValueProps.prefix}
                    units={channelValueProps.units}
                    unitSpace={channelValueProps.unitSpace}
                    value={channelValueProps.value}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
