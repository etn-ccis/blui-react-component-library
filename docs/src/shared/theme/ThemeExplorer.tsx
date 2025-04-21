import React, { useState } from 'react';
import { Spacer } from '@brightlayer-ui/react-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as BLUIColors from '@brightlayer-ui/colors';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import {
    Card,
    Divider,
    Select,
    Toolbar,
    MenuItem,
    Switch,
    FormControlLabel,
    Typography,
    Box,
    Stack,
} from '@mui/material';
import { componentNameList, componentList } from './componentList';
import { SystemStyleObject } from '@mui/system';
const darkTheme = createTheme({
    cssVariables: { colorSchemeSelector: 'class' },
    components: theme.components,
    defaultColorScheme: 'dark',
    spacing: theme.spacing,
    typography: theme.typography,
    palette: {
        mode: 'dark',
        primary: {
            main: BLUIColors.blue[500],
            dark: BLUIColors.blue[700],
            light: BLUIColors.blue[50],
        },
        secondary: {
            main: BLUIColors.lightBlue[500],
            dark: BLUIColors.lightBlue[700],
            light: BLUIColors.lightBlue[50],
            contrastText: BLUIColors.black[50],
        },
        background: {
            default: BLUIColors.darkBlack[800],
            paper: BLUIColors.black[900],
        },
        text: {
            primary: BLUIColors.black[50],
            secondary: BLUIColors.black[200],
            disabled: BLUIColors.black[300],
        },
    },
});
const lightTheme = createTheme({
    cssVariables: { colorSchemeSelector: 'class' },
    palette: {
        mode: 'light',
        primary: {
            main: BLUIColors.blue[500],
            dark: BLUIColors.blue[700],
            light: BLUIColors.blue[50],
        },
        secondary: {
            main: BLUIColors.lightBlue[500],
            dark: BLUIColors.lightBlue[700],
            light: BLUIColors.lightBlue[50],
            contrastText: BLUIColors.white[50],
        },
        background: {
            default: BLUIColors.white[200],
            paper: BLUIColors.white[50],
        },
        text: {
            primary: BLUIColors.black[500],
            secondary: BLUIColors.gray[500],
        },
    },
    components: theme.components,
    defaultColorScheme: 'light',
    spacing: theme.spacing,
    typography: theme.typography,
});
export const ThemeExplorer: React.FC = () => {
    const [localThemeDark, setLocalThemeDark] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(0);
    return (
        <ThemeProvider theme={localThemeDark ? darkTheme : lightTheme}>
            <Card
                sx={{ mb: 4, boxSizing: 'border-box', '&:hover': { boxShadow: 6 } }}
                variant={localThemeDark ? 'outlined' : undefined}
                className={localThemeDark ? 'dark' : 'light'}
            >
                <Toolbar
                    sx={[
                        { py: 0, px: { xs: 2, sm: 2 } },
                        (t): SystemStyleObject => ({
                            [t.breakpoints.down('sm')]: { flexDirection: 'column', py: 1, alignItems: 'flex-end' },
                        }),
                    ]}
                >
                    <Select
                        variant={'standard'}
                        value={selectedComponent}
                        onChange={(e): void => {
                            // @ts-ignore
                            setSelectedComponent(e.target.value);
                        }}
                        color={'primary'}
                        disableUnderline
                        sx={[
                            {
                                backgroundColor: '#abb2',
                                borderRadius: 1,
                                width: { xs: '100%', sm: 'auto' },
                                '& .MuiSelect-icon': {
                                    mr: 1,
                                },
                                '& .MuiSelect-select': {
                                    py: 1.5,
                                    pr: '40px !important',
                                    pl: 2,
                                    '&:focus': {
                                        borderRadius: 1,
                                    },
                                },
                            },
                        ]}
                    >
                        {componentNameList.map((componentName, index) => (
                            <MenuItem value={index} key={index}>
                                {componentName}
                            </MenuItem>
                        ))}
                    </Select>
                    <Spacer />
                    <FormControlLabel
                        label={'Use Dark Theme'}
                        checked={localThemeDark}
                        control={<Switch />}
                        onChange={(): void => {
                            setLocalThemeDark(!localThemeDark);
                        }}
                        labelPlacement={'start'}
                    />
                </Toolbar>
                <Divider />
                <Stack alignItems={'center'} justifyContent={'center'} sx={{ backgroundColor: 'background.default' }}>
                    {componentList[selectedComponent]}
                </Stack>
                <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Box sx={{ py: 1, px: 2, display: { xs: 'block', sm: 'none' }, backgroundColor: 'background.paper' }}>
                    <Typography variant={'caption'}>
                        You may not get the best theme preview experience on mobile.
                    </Typography>
                </Box>
            </Card>
        </ThemeProvider>
    );
};
