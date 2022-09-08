import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const heroJson = useAppSelector((state: RootState) => state.componentsPropsState.heroComponent);

    const heroProps = createProps(heroJson.props as PropsType[]);
    const otherProps = createProps(heroJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(heroJson, propName, currentValue, 'props');

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
        const jsx = `<Hero
    label={"${heroProps.label}"}
    ChannelValueProps={{ icon: ${`${otherProps.valueIcon}`}, value: "${otherProps.value}", units: "${
            otherProps.units
        }" }}
    icon={${getIconWithProp(heroProps.icon, { fontSize: 'inherit', htmlColor: `${otherProps.htmlColor}` })}}
    ${toggleDefaultProp('iconBackgroundColor', heroProps.iconBackgroundColor)}
    ${toggleDefaultProp('iconSize', heroProps.iconSize)}
/>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Hero
                    label={heroProps.label}
                    ChannelValueProps={{
                        icon: getIcon(`${otherProps.valueIcon}`),
                        value: `${otherProps.value}`,
                        units: `${otherProps.units}`,
                    }}
                    iconBackgroundColor={heroProps.iconBackgroundColor}
                    icon={getIcon(heroProps.icon, { fontSize: 'inherit', htmlColor: otherProps.htmlColor })}
                    iconSize={heroProps.iconSize}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
