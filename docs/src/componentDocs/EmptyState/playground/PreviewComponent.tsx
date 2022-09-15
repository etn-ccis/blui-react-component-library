/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const PreviewComponent = (): JSX.Element => {
    const emptyStateJson = useAppSelector((state: RootState) => state.componentsPropsState.emptyStateComponent);

    const emptyStateProps = createProps(emptyStateJson.props as PropsType[]);

//     const generateCodeSnippet = (): string => {
//         const jsx = `<ListItemTag
//     label={"${listItemTagProps.label}"}
//     backgroundColor={"${listItemTagProps.backgroundColor}"}
//     fontColor={"${listItemTagProps.fontColor}"}
// />`;
//         return jsx;
//     };

    return (
        <PreviewComponentWithCode
            previewContent={
                <h1></h1>
            }
            code={'ss'}
        />
    );
};
