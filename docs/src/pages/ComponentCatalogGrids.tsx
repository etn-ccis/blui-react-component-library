import React from 'react';
import { Grid, Tooltip, Chip, Box } from '@mui/material';
import { componentCatalogLinks } from './ComponentCatalogLinks';
import { ReactBlue } from '../assets/icons';
import { InfoCard } from '../shared/components/InfoCard';

type CatalogStorybookLinkProp = {
    content: string;
};

const CatalogStorybookLink: React.FC<CatalogStorybookLinkProp> = (props) => {
    const { content } = props;
    if (content.startsWith('http')) {
        return (
            <Chip
                label="React"
                avatar={<ReactBlue sx={{ backgroundColor: 'transparent !important' }} />}
                onClick={(): void => {
                    window.open(content, '_blank');
                }}
            />
        );
    }
    return (
        <Tooltip title={content} placement={'top'} arrow>
            <div>
                <Chip
                    disabled
                    label="React"
                    variant={'outlined'}
                    avatar={<ReactBlue sx={{ backgroundColor: 'transparent !important', filter: 'grayscale(100%)' }} />}
                />
            </div>
        </Tooltip>
    );
};

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
                    descriptionContent={
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 1,
                            }}
                        >
                            <CatalogStorybookLink content={link.react} />
                        </Box>
                    }
                />
            </Grid>
        ))}
    </Grid>
);
