import React, { useState } from 'react';
import { Spacer } from '@brightlayer-ui/react-components';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
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
    useColorScheme,
} from '@mui/material';
import { componentNameList, componentList } from './componentList';
import { SystemStyleObject } from '@mui/system';

export const ThemeExplorer: React.FC = () => {
    const colorScheme = useColorScheme();
    const globalTheme = useTheme();
    const [localThemeDark, setLocalThemeDark] = useState(colorScheme.mode === 'dark');
    const [selectedComponent, setSelectedComponent] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{ mb: 4, boxSizing: 'border-box', '&:hover': { boxShadow: 6 } }}
                variant={globalTheme.palette.mode === 'dark' ? 'outlined' : undefined}
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
