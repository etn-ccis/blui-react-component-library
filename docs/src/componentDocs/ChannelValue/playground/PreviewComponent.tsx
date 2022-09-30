import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    createProps,
    getIcon,
    getIconWithProp,
    hideDefaultPropsFromSnippet,
    removeEmptyLines,
} from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ChannelValue } from '@brightlayer-ui/react-components/core/ChannelValue';

export const PreviewComponent = (): JSX.Element => {
    const channelValueJson = useAppSelector((state: RootState) => state.componentsPropsState.channelValueComponent);

    const channelValueProps = createProps(channelValueJson.props as PropsType[]);
    const otherProps = createProps(channelValueJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(channelValueJson, propName, currentValue, 'props');

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
    fontSize={${channelValueProps.fontSize}}
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
