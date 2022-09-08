import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';

export const PreviewComponent = (): JSX.Element => {
    const listItemTagJson = useAppSelector((state: RootState) => state.componentsPropsState.listItemTagComponent);

    const listItemTagProps = createProps(listItemTagJson.props as PropsType[]);

    const generateCodeSnippet = (): string => {
        const jsx = `<ListItemTag
    label={"${listItemTagProps.label}"}
    backgroundColor={"${listItemTagProps.backgroundColor}"}
    fontColor={"${listItemTagProps.fontColor}"}
/>`;
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
