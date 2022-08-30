import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { DrawerHeader } from '@brightlayer-ui/react-components';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
const topologyBgImage = require('../images/topology_40.png');
const farmBgImage = require('../images/farm.jpg');

export const PreviewComponent = (): JSX.Element => {
    const drawerHeaderJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerHeaderComponent);

    const drawerHeaderProps = createProps(drawerHeaderJson.props as PropsType[]);

    const getImage = (image: string): string => {
        switch (image) {
            case 'Pattern':
                return topologyBgImage;
            case 'Farm':
                return farmBgImage;
            case 'undefined':
                return 'undefined';
            default:
                return 'undefined';
        }
    };

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerHeaderJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<DrawerHeader
    backgroundColor={"${drawerHeaderProps.backgroundColor}"}
    ${toggleDefaultProp('backgroundImage', `${getImage(drawerHeaderProps.backgroundImage)}`)}
    ${toggleDefaultProp('divider', drawerHeaderProps.divider)}
    ${toggleDefaultProp('backgroundOpacity', drawerHeaderProps.backgroundOpacity)}
    fontColor={"${drawerHeaderProps.fontColor}"}
    ${toggleDefaultProp('icon', drawerHeaderProps.icon)}
    subtitle={"${drawerHeaderProps.subtitle}"}
    title={"${drawerHeaderProps.title}"}>
</DrawerHeader>`;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <DrawerHeader
                    sx={{ width: 300 }}
                    backgroundColor={drawerHeaderProps.backgroundColor}
                    backgroundImage={getImage(drawerHeaderProps.backgroundImage)}
                    backgroundOpacity={drawerHeaderProps.backgroundOpacity}
                    divider={drawerHeaderProps.divider}
                    fontColor={drawerHeaderProps.fontColor}
                    icon={getIcon(drawerHeaderProps.icon)}
                    subtitle={drawerHeaderProps.subtitle}
                    title={drawerHeaderProps.title}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
