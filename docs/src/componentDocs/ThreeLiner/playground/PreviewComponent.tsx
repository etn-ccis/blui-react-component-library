import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { createProps } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { ThreeLiner } from '@brightlayer-ui/react-components';

export const PreviewComponent = (): JSX.Element => {
    const threeLinerJson = useAppSelector((state: RootState) => state.componentsPropsState.threeLinerComponent);

    const threeLinerProps = createProps(threeLinerJson.props as PropsType[]);

    const generateCodeSnippet = (): string => {
        const jsx = `<ThreeLiner
    title={"${threeLinerProps.title}"}
    subtitle={"${threeLinerProps.subtitle}"}
    info={"${threeLinerProps.info}"}
/>`;
        return jsx;
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <ThreeLiner
                    title={threeLinerProps.title}
                    subtitle={threeLinerProps.subtitle}
                    info={threeLinerProps.info}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
