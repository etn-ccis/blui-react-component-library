import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toggleDrawer } from '../redux/appState';
import { useAppDispatch } from '../redux/hooks';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export type SharedAppBarProps = {
    title: string;
};

export const SharedAppBar: React.FC<SharedAppBarProps> = (props): JSX.Element => {
    const { title } = props;
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const dispatch = useAppDispatch();

    return (
        <AppBar position={'sticky'} elevation={0} sx={{ zIndex: 10000 }}>
            <Toolbar sx={{ px: 2 }}>
                {!lgUp && (
                    <IconButton
                        color={'inherit'}
                        onClick={(): void => {
                            dispatch(toggleDrawer());
                        }}
                        edge={'start'}
                        sx={{ mr: 2.5 }}
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
    );
};
