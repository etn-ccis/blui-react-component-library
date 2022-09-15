/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ChannelValue } from '@brightlayer-ui/react-components/core/ChannelValue';
// import { ThreeLiner } from '@brightlayer-ui/react-components';

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

    const generateCodeSnippet = (): string => {
        const jsx = `<ChannelValue
        value={"${channelValueProps.value}"}
        units={"${channelValueProps.units}"}
        color={"${channelValueProps.color}"}
        icon={${getIconWithProp(channelValueProps.icon, { fontSize: 'inherit', htmlColor: `${otherProps.htmlColor}` })}}
        fontSize={"${channelValueProps.fontSize}"}
        color={"${channelValueProps.color}"}
        prefix={"${channelValueProps.prefix}"}
        ${toggleDefaultProp('unitSpace', channelValueProps.unitSpace)}
    />`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <ChannelValue
                    value={channelValueProps.value}
                    units={channelValueProps.units}
                    color={channelValueProps.color}
                    icon={getIcon(channelValueProps.icon, { fontSize: 'inherit', htmlColor: otherProps.htmlColor })}
                    fontSize={channelValueProps.fontSize}
                    prefix={channelValueProps.prefix}
                    unitSpace={channelValueProps.unitSpace}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
