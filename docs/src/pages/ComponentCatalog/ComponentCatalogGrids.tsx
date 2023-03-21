import React from 'react';
import { Grid, Tooltip, Chip, Box } from '@mui/material';
import { componentCatalogLinks } from './ComponentCatalogLinks';
import { Angular, ReactBlue } from '../../assets/icons';
import { InfoCard } from '../../shared/components/InfoCard';

type CatalogStorybookLinkProp = {
    name: 'Angular' | 'React' | 'React Native';
    content: string;
};

const CatalogStorybookLink: React.FC<CatalogStorybookLinkProp> = (props) => {
    const { name, content } = props;
    if (content.startsWith('http')) {
        return (
            <Chip
                label={name}
                avatar={
                    name === 'Angular' ? (
                        <Angular sx={{ backgroundColor: 'transparent !important' }} />
                    ) : (
                        <ReactBlue sx={{ backgroundColor: 'transparent !important' }} />
                    )
                }
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
                    label={name}
                    variant={'outlined'}
                    avatar={
                        name === 'Angular' ? (
                            <Angular sx={{ backgroundColor: 'transparent !important', filter: 'grayscale(100%)' }} />
                        ) : (
                            <ReactBlue sx={{ backgroundColor: 'transparent !important', filter: 'grayscale(100%)' }} />
                        )
                    }
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
                            <CatalogStorybookLink name="Angular" content={link.angular} />
                            <CatalogStorybookLink name="React" content={link.react} />
                            <CatalogStorybookLink name="React Native" content={link.reactNative} />
                        </Box>
                    }
                />
            </Grid>
        ))}
    </Grid>
);
