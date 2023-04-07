import React from 'react';
import { Grid } from '@mui/material';
import { componentCatalogLinks } from './ComponentCatalogLinks';
import { InfoCard } from '../shared/components/InfoCard';
import { useNavigate } from 'react-router-dom';

export const ComponentCatalogGrids: React.FC = () => {
    const navigate = useNavigate();
    return (
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
                            navigate(`/components/${link.path}`);
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
