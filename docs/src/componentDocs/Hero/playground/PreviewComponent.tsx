/*eslint-disable */
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
    const channelValuProps = createProps(heroJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(heroJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `
        <Hero
            label={"${heroProps.label}"}
            ChannelValueProps={{ icon: ${`${channelValuProps.icon}`}, value: "${channelValuProps.value}", units: "${
            channelValuProps.units
        }" }}
            iconBackgroundColor={"${heroProps.iconBackgroundColor}"}
            ${toggleDefaultProp('icon', `${heroProps.icon}`)}
            iconSize={"${heroProps.iconSize}"}
        />
        `;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Hero
                    label={heroProps.label}
                    ChannelValueProps={{
                        icon: getIcon(`${channelValuProps.icon}`),
                        value: `${channelValuProps.value}`,
                        units: `${channelValuProps.units}`,
                    }}
                    iconBackgroundColor={heroProps.iconBackgroundColor}
                    icon={getIcon(heroProps.icon)}
                    iconSize={heroProps.iconSize}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
