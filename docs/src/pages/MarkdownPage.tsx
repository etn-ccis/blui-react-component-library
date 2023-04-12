import React, { HTMLAttributes } from 'react';
import { PageContent } from './PageContent';
import { SharedAppBar } from '../layout';

export type MarkdownPageProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    markdown: React.FC;
    noPadding?: boolean;
    background?: string;
    wideLayout?: boolean;
    sidebar?: boolean;
};

export const MarkdownPage: React.FC<MarkdownPageProps> = (props): JSX.Element => {
    const { markdown: Markdown, noPadding, wideLayout, title, ...divProps } = props;

    return (
        <div {...divProps}>
            <SharedAppBar title={title} />
            <PageContent noPadding={noPadding} wideLayout={wideLayout}>
                <Markdown />
            </PageContent>
        </div>
    );
};
MarkdownPage.displayName = 'MarkdownPage';
