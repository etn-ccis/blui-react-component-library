import React from 'react';

// components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { Spacer } from '@brightlayer-ui/react-components';
import { Settings } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

// hooks
import { toggleDrawer, changeSiteTheme, changeDirection } from '../redux/appState';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useTheme } from '@mui/material/styles';
import { RootState } from '../redux/store';
import { SiteThemeType, UIDirection } from '../__types__';

export type SharedAppBarProps = {
    title: string;
};

const styles = {
    formControl: {
        px: 2,
        pb: 1,
    },
    caption: {
        px: 2,
        pt: 1,
        width: 280,
    },
};

export const SharedAppBar: React.FC<SharedAppBarProps> = (props): JSX.Element => {
    const { title } = props;
    const theme = useTheme();
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const dispatch = useAppDispatch();
    const [themeSelectorAnchorEl, setThemeSelectorAnchorEl] = React.useState<null | HTMLElement>(null);
    const siteTheme = useAppSelector((state: RootState) => state.appState.siteTheme);
    const linkToThemesOverview = `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''}/themes/overview`;

    const onClickThemeSelectorItem = React.useCallback(
        (option: SiteThemeType): void => {
            dispatch(changeSiteTheme({ siteTheme: option }));
            setThemeSelectorAnchorEl(null);
        },
        [dispatch]
    );

    const onDirectionChange = React.useCallback(
        (option: UIDirection): void => {
            dispatch(changeDirection({ direction: option }));
            setThemeSelectorAnchorEl(null);
        },
        [dispatch]
    );

    const ThemeSelector = React.useCallback(
        () => (
            <Menu
                open={Boolean(themeSelectorAnchorEl)}
                anchorEl={themeSelectorAnchorEl}
                onClose={(): void => {
                    setThemeSelectorAnchorEl(null);
                }}
            >
                <FormControl sx={styles.formControl}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={siteTheme}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="light"
                            control={<Radio />}
                            label="Light Theme"
                            onClick={(): void => onClickThemeSelectorItem('light')}
                        />
                        <FormControlLabel
                            value="dark"
                            control={<Radio />}
                            label="Dark Theme"
                            onClick={(): void => onClickThemeSelectorItem('dark')}
                        />
                        <FormControlLabel
                            value="system"
                            control={<Radio />}
                            label="System Default"
                            onClick={(): void => onClickThemeSelectorItem('system')}
                        />
                    </RadioGroup>
                </FormControl>
                <FormControl >
                <RadioGroup sx={styles.formControl}>
                    <FormControlLabel
                            value="ltr"
                            control={<Radio />}
                            label="Left-to-Right"
                            onClick={(): void => onDirectionChange('ltr')}
                        />
                        <FormControlLabel
                            value="rtl"
                            control={<Radio />}
                            label="Right-to-Left"
                            onClick={(): void => onDirectionChange('rtl')}
                        />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <Box sx={styles.caption}>
                    <Typography variant={'caption'} color={'text.secondary'}>
                        This website is themed using our React theme package. Learn more{' '}
                        <a href={linkToThemesOverview} style={{ color: 'inherit' }}>
                            here
                        </a>
                        .
                    </Typography>
                </Box>
            </Menu>
        ),
        [siteTheme, themeSelectorAnchorEl]
    );

    return (
        <>
            <AppBar position={'sticky'} elevation={0} sx={{ zIndex: 'appBar' }}>
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
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant={'h6'} color={'inherit'}>
                        {title}
                    </Typography>
                    <Spacer />
                    <IconButton
                        color={'inherit'}
                        size={'large'}
                        edge={'end'}
                        onClick={(e): void => {
                            setThemeSelectorAnchorEl(e.currentTarget);
                        }}
                    >
                        <Settings />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <ThemeSelector />
        </>
    );
};
