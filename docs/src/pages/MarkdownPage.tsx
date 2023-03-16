import React, { HTMLAttributes } from 'react';
import { PageContent } from './PageContent';
// import { useBackgroundColor } from '../hooks/useBackgroundColor';
// import { useTheme } from '@mui/material';
// import * as Colors from '@brightlayer-ui/colors';

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
    // const theme = useTheme();

    // let backgroundColor = background;
    // if (background === 'light') {
    //     backgroundColor = theme.palette.background.paper;
    // } else if (background === 'dark') {
    //     backgroundColor = theme.palette.mode === 'light' ? Colors.white[200] : theme.palette.background.default;
    // }
    // useBackgroundColor(backgroundColor);

    return (
        <div {...divProps}>
            <PageContent
                noPadding={noPadding}
                wideLayout={wideLayout}
            >
                <Markdown />
            </PageContent>
        </div>
    );
};
MarkdownPage.displayName = 'MarkdownPage';
// MarkdownPage.defaultProps = {
    // background: 'light',
// };
