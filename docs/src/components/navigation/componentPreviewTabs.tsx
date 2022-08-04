import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material/styles';
import { DRAWER_WIDTH } from '../../shared';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function getNumber(location: string) {
    const pathname = ['examples', 'api-docs', 'playground'].includes(location.split('/')[4])
        ? location.split('/')[4]
        : location.split('/')[3];
    if (!pathname) return 0;
    else {
        switch (pathname) {
            case 'api-docs':
                return 1;
            case 'playground':
                return 2;
            default:
                return 0;
        }
    }
}

const tabStyles = {
    width: '100%',
    color: (theme: Theme) => theme.palette.text.primary,
    '&.Mui-selected': {
        color: (theme: Theme) => theme.palette.primary.main,
    },
};

export default function ComponentPreviewTabs() {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        navigate(`/${newValue === 1 ? 'api-docs' : newValue === 2 ? 'playground' : 'examples'}`);
    };

    React.useEffect(() => {
        setValue(getNumber(location?.pathname));
    }, [location]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    bgcolor: theme.palette.background.paper,
                    borderBottom: 1,
                    borderColor: 'divider',
                    width: `calc(100% - ${DRAWER_WIDTH}px)`,
                    position: 'fixed',
                    zIndex: 1000,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        '& .MuiTabs-indicator': {
                            backgroundColor: theme.palette.primary.main,
                        },
                    }}
                >
                    <Tab to="examples" component={Link} sx={tabStyles} label="Examples" {...a11yProps(0)} />
                    <Tab to="api-docs" component={Link} sx={tabStyles} label="API Docs" {...a11yProps(1)} />
                    <Tab to="playground" component={Link} sx={tabStyles} label="Playground" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '980px', m: '0px auto' }}
                >
                    <Box sx={{ p: '48px 40px', m: '0px auto', backgroundColor: '#F8F8F8' }}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '980px', m: '0px auto' }}
                >
                    <Box sx={{ p: '48px 40px', m: '0px auto', backgroundColor: '#F8F8F8' }}>
                        <Outlet />
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Outlet />
                </Box>
            </TabPanel>
        </Box>
    );
}
