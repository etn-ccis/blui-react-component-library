import React, { HTMLAttributes } from 'react';
import { PageContent } from './PageContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toggleDrawer } from '../redux/appState';
import { useAppDispatch } from '../redux/hooks';
import { useTheme } from '@mui/material/styles';
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
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const dispatch = useAppDispatch();

    return (
        <div {...divProps}>
            <AppBar position={'sticky'} elevation={0} sx={{ zIndex: 10000 }}>
                <Toolbar sx={{ px: 2 }}>
                    {lgUp ? null : (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                dispatch(toggleDrawer());
                            }}
                            edge={'start'}
                            sx={{ mr: 3 }}
                            size="large"
                        >
                            <Menu />
                        </IconButton>
                    )}
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
