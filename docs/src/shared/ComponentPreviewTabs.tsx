import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import { TabPanel } from '../shared';
import { PLAYGROUND_DRAWER_WIDTH } from './constants';

const hidePlaygroudTabs = ['drawer-layout', 'spacer', 'drawer-body'];
const docsTabs = ['examples', 'api-docs', 'playground'];

function a11yProps(index: number): any {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function getNumber(location: string, tabs: string[]): number {
    const pathname = tabs.includes(location.split('/')[4]) ? location.split('/')[4] : location.split('/')[3];
    if (!pathname) return 0;

    switch (pathname) {
        case 'api-docs':
            return 1;
        case 'playground':
            return 2;
        default:
            return 0;
    }
}

function togglePlaygroundTab(location: string): boolean {
    const tabName = location.split('/').filter((e) => hidePlaygroudTabs.includes(e))[0];
    return hidePlaygroudTabs.includes(tabName);
}

const tabStyles = {
    width: '100%',
    color: 'text.primary',
    '&.Mui-selected': {
        color: 'primary.main',
    },
};

const tabPanelContentStyles: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: (theme: Theme) => `calc(100vh - ${theme.spacing(8)})`,
    maxWidth: '1080px',
    mx: 'auto',
};

const outletContainerStyles = {
    pb: 6,
};

const playgroundContentStyles = {
    maxHeight: `calc(100vh - 64px)`,
    height: '100%',
    display: 'flex',
    flex: '1 1 0px',
    marginRight: `${PLAYGROUND_DRAWER_WIDTH}px`,
};

export const ComponentPreviewTabs = (): JSX.Element => {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const [hidePlaygroundTab, setHidePlaygroundTab] = React.useState(false);
    const theme = useTheme();
    const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
        navigate(`/${newValue === 1 ? 'api-docs' : newValue === 2 ? 'playground' : 'examples'}`);
    };

    React.useEffect(() => {
        setValue(getNumber(location?.pathname, docsTabs));
        setHidePlaygroundTab(togglePlaygroundTab(location.pathname));
    }, [location]);

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="component docs tabs"
                centered
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    bgcolor: theme.palette.background.paper,
                    borderBottom: 1,
                    borderColor: 'divider',
                    position: 'sticky',
                    top: { xs: 56, sm: 64 },
                    zIndex: theme.zIndex.appBar,
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <Tab
                    to="examples"
                    component={Link}
                    sx={{
                        ...tabStyles,
                        [theme.breakpoints.down(1040)]: {
                            width: '33%',
                        },
                    }}
                    label="Examples"
                    replace={true}
                    {...a11yProps(0)}
                />
                <Tab
                    to="api-docs"
                    component={Link}
                    sx={{
                        ...tabStyles,
                        [theme.breakpoints.down(1040)]: {
                            width: '33%',
                        },
                    }}
                    label="API Docs"
                    replace={true}
                    {...a11yProps(1)}
                />
                {!hidePlaygroundTab && (
                    <Tab
                        to="playground"
                        component={Link}
                        sx={{
                            ...tabStyles,
                            [theme.breakpoints.down(1040)]: {
                                width: '33%',
                            },
                        }}
                        label="Playground"
                        replace={true}
                        {...a11yProps(2)}
                    />
                )}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box
                    sx={{
                        ...tabPanelContentStyles,
                        [theme.breakpoints.down(1440)]: {
                            mx: 3,
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Box sx={outletContainerStyles}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    sx={{
                        ...tabPanelContentStyles,
                        [theme.breakpoints.down(1440)]: {
                            mx: 3,
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Box sx={outletContainerStyles}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={playgroundContentStyles}>
                    <Outlet />
                </Box>
            </TabPanel>
        </>
    );
};
