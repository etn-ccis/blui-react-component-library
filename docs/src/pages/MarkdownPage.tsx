import React, { HTMLAttributes } from 'react';
import { PageContent } from './PageContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
            <AppBar position={'sticky'} elevation={0} sx={{ zIndex: 10000 }}>
                <Toolbar>
                    <Typography variant={'h6'} color={'inherit'}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <PageContent noPadding={noPadding} wideLayout={wideLayout}>
                <Markdown />
            </PageContent>
        </div>
    );
};
MarkdownPage.displayName = 'MarkdownPage';
