import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const infoListItemJson = useAppSelector((state: RootState) => state.componentsPropsState.infoListItemComponent);

    const infoListItemProps = createProps(infoListItemJson.props as PropsType[]);
    const infoListItemOtherProps = createProps(infoListItemJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(infoListItemJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<InfoListItem
    ${toggleDefaultProp('avatar', infoListItemProps.avatar)}
    backgroundColor={"${infoListItemProps.backgroundColor}"}
    ${toggleDefaultProp('chevron', infoListItemProps.chevron)}
    chevronColor={"${infoListItemProps.chevronColor}"}
    ${toggleDefaultProp('dense', infoListItemProps.dense)}
    ${toggleDefaultProp('divider', infoListItemProps.divider)}
    fontColor={"${infoListItemProps.fontColor}"}
    ${toggleDefaultProp('hidePadding', infoListItemProps.hidePadding)}
    ${toggleDefaultProp('icon', infoListItemProps.icon)}
    ${toggleDefaultProp('iconAlign', infoListItemProps.iconAlign)}
    iconColor={"${infoListItemProps.iconColor}"}
    ${toggleDefaultProp('info', infoListItemProps.info)}
    ${toggleDefaultProp('ripple', infoListItemProps.ripple)}
    statusColor={"${infoListItemProps.statusColor}"}
    ${toggleDefaultProp('subtitle', infoListItemProps.subtitle)}
    title={"${infoListItemProps.title}"}
    ${toggleDefaultProp('wrapInfo', infoListItemProps.wrapInfo)}
    ${toggleDefaultProp('wrapSubtitle', infoListItemProps.wrapSubtitle)}
    ${toggleDefaultProp('wrapTitle', infoListItemProps.wrapTitle)}
    ${toggleDefaultProp('disabled', infoListItemOtherProps.disabled, 'otherProps')}
    onClick={(): void => {
        // eslint-disable-next-line
        console.log('clicked');
    }}
/>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <InfoListItem
                    sx={{ maxWidth: '700px' }}
                    avatar={infoListItemProps.avatar}
                    backgroundColor={infoListItemProps.backgroundColor}
                    chevron={infoListItemProps.chevron}
                    chevronColor={infoListItemProps.chevronColor}
                    dense={infoListItemProps.dense}
                    divider={infoListItemProps.divider === 'none' ? undefined : infoListItemProps.divider}
                    fontColor={infoListItemProps.fontColor}
                    hidePadding={infoListItemProps.hidePadding}
                    icon={getIcon(infoListItemProps.icon)}
                    iconAlign={infoListItemProps.iconAlign}
                    iconColor={infoListItemProps.iconColor}
                    info={infoListItemProps.info}
                    ripple={infoListItemProps.ripple}
                    statusColor={infoListItemProps.statusColor}
                    subtitle={infoListItemProps.subtitle}
                    title={infoListItemProps.title}
                    wrapInfo={infoListItemProps.wrapInfo}
                    wrapSubtitle={infoListItemProps.wrapSubtitle}
                    wrapTitle={infoListItemProps.wrapTitle}
                    disabled={infoListItemOtherProps.disabled}
                    onClick={(): void => {
                        if (!infoListItemOtherProps.disabled) {
                            // eslint-disable-next-line
                            console.log('clicked');
                        }
                    }}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
