import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps, hideDefaultPropsFromSnippet } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';

export const PreviewComponent = (): JSX.Element => {
    const listItemTagJson = useAppSelector((state: RootState) => state.componentsPropsState.listItemTagComponent);
    const listItemTagProps = createProps(listItemTagJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(listItemTagJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<ListItemTag label={"${listItemTagProps.label}"} ${toggleDefaultProp(
            'backgroundColor',
            listItemTagProps.backgroundColor
        )} ${toggleDefaultProp('backgroundColor', listItemTagProps.backgroundColor)}/>`;
        return jsx;
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <ListItemTag
                    label={listItemTagProps.label}
                    backgroundColor={listItemTagProps.backgroundColor}
                    fontColor={listItemTagProps.fontColor}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
