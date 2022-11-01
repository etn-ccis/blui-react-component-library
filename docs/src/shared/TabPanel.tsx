import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
};

export const TabPanel = (props: TabPanelProps): JSX.Element => {
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
                <Box sx={{ backgroundColor: '#FFFFFF' }}>
                    <Typography component={'div'}>{children}</Typography>
                </Box>
            )}
        </Box>
    );
};
