import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import {
    createProps,
    getIcon,
    getIconWithProp,
    hideDefaultPropsFromSnippet,
    removeEmptyLines,
} from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const heroJson = useAppSelector((state: RootState) => state.componentsPropsState.heroComponent);

    const heroProps = createProps(heroJson.props as PropsType[]);
    const heroOtherProps = createProps(heroJson.otherProps as PropsType[]);
    const channelValueProps = createProps(heroJson.otherComponentProps?.childComponentProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(heroJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<Hero
    label={"${heroProps.label}"}
    ChannelValueProps={{ icon: ${`${channelValueProps.valueIcon}`}, value: "${channelValueProps.value}", units: "${
            channelValueProps.units
        }" }}
    icon={${getIconWithProp(heroProps.icon, { fontSize: 'inherit', htmlColor: `${heroOtherProps.htmlColor}` })}}
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
                        icon: getIcon(`${channelValueProps.valueIcon}`),
                        value: `${channelValueProps.value}`,
                        units: `${channelValueProps.units}`,
                    }}
                    iconBackgroundColor={heroProps.iconBackgroundColor}
                    icon={getIcon(heroProps.icon, { fontSize: 'inherit', htmlColor: heroOtherProps.htmlColor })}
                    iconSize={heroProps.iconSize}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
