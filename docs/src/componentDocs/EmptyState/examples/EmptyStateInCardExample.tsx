import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Add from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOff from '@mui/icons-material/LocationOff';
import Typography from '@mui/material/Typography';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const EmptyStateInCardExample = (): JSX.Element => (
    <Box
        sx={{
            width: '392px',
            margin: '0 auto',
        }}
    >
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Device Usage</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <EmptyState
                    icon={<LocationOff fontSize={'inherit'} />}
                    title={'No Devices Found'}
                    description={'Enable Location Services via Settings to receive GPS information'}
                    actions={
                        <Button variant={'contained'} color={'primary'} startIcon={<Add />}>
                            Learn More
                        </Button>
                    }
                />
            </AccordionDetails>
        </Accordion>
    </Box>
);
