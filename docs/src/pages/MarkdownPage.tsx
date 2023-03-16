import React, { HTMLAttributes } from 'react';
import { PageContent } from './PageContent';

export type MarkdownPageProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    markdown: React.FC;
    noPadding?: boolean;
    background?: string;
    wideLayout?: boolean;
    sidebar?: boolean;
};

export const MarkdownPage: React.FC<MarkdownPageProps> = (props): JSX.Element => {
    const { markdown: Markdown, noPadding, wideLayout, ...divProps } = props;
    return (
        <div {...divProps}>
            <PageContent noPadding={noPadding} wideLayout={wideLayout}>
                <Markdown />
            </PageContent>
        </div>
    );
};
MarkdownPage.displayName = 'MarkdownPage';
