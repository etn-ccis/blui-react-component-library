import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { Box, Button } from '@mui/material';
import { HelpOutline, Add } from '@mui/icons-material';

export const EmptyStateDemo: JSX.Element = (
    <Box sx={{ maxWidth: 400, py: 5, px: 3 }}>
        <EmptyState
            icon={<HelpOutline fontSize={'inherit'} />}
            title={'No Folders Found'}
            description={
                'Folders let you keep your teams’ documents organized all in one place. Create a new folder to add files.'
            }
            actions={
                <Button color={'primary'} variant={'contained'} startIcon={<Add />}>
                    Add a Folder
                </Button>
            }
        />
    </Box>
);
