import React from 'react';
import { Button, Paper, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const DialogDemo: JSX.Element = (
    <Paper elevation={16} sx={{ maxWidth: 320, my: 8, mx: 2 }}>
        <DialogTitle>Enjoy Brightlayer UI so far?</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color={'primary'}>I love it</Button>
            <Button color={'primary'}>Of course</Button>
        </DialogActions>
    </Paper>
);
