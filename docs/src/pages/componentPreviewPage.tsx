import React, { HTMLAttributes } from 'react';
import { AppBar, IconButton, Toolbar, Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { ComponentPreviewTabs } from '../shared';
import { toggleDrawer } from '../redux/appState';
import { useAppDispatch } from '../redux/hooks';

export type ComponentPreviewPageProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
};
export const ComponentPreviewPage: React.FC<ComponentPreviewPageProps> = (props): JSX.Element => {
    const { title, ...divProps } = props;
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div {...divProps} style={{ display: 'flex', flexDirection: 'column' }}>
            <AppBar
                position={'sticky'}
                elevation={0}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                }}
            >
                <Toolbar sx={{ pl: 2, pr: 2 }}>
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
            <Box>
                <ComponentPreviewTabs />
            </Box>
        </div>
    );
};
