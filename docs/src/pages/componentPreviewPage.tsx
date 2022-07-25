import React, { HTMLAttributes } from 'react';
import { AppBar, IconButton, Toolbar, Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import TabPanel from '../components/navigation/componentPreviewTabs';

export type ComponentPreviewPageProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
};
export const ComponentPreviewPage: React.FC<ComponentPreviewPageProps> = (props): JSX.Element => {
    const { title, ...divProps } = props;
    const theme = useTheme();
    const { setDrawerOpen } = useDrawer();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div {...divProps} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'} color={'transparent'}>
                <Toolbar sx={{ pl: 2, pr: 2 }}>
                    {md ? null : (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
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
                <TabPanel />
            </Box>
        </div>
    );
};
