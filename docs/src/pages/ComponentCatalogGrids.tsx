import React from 'react';
import { Grid } from '@mui/material';
import { componentCatalogLinks } from './ComponentCatalogLinks';
import { InfoCard } from '../shared/components/InfoCard';

export const ComponentCatalogGrids: React.FC = () => (
    <Grid container spacing={6} sx={{ mt: 4 }}>
        {componentCatalogLinks.map((link) => (
            <Grid item xs={12} sm={6} md={4} key={link.title}>
                <InfoCard
                    spacing={6}
                    source={link.image}
                    aspectRatio={'3x2'}
                    title={link.title}
                    description={''}
                    onClick={(): void => {
                        window.open(link.react, '_blank');
                    }}
                />
            </Grid>
        ))}
    </Grid>
);
