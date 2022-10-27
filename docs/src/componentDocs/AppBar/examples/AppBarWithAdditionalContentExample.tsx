import React from 'react';
import { Box, IconButton, Toolbar } from '@mui/material';
import { AppBar, Spacer, ThreeLiner } from '@brightlayer-ui/react-components';
import { getBodyFiller, ExampleShowcase } from '../../../shared';
import { Download, Menu, MoreVert, Search } from '@mui/icons-material';
import BackgroundImage from '../images/farm.jpg';

export const AppBarWithAdditionalContentExample = (): JSX.Element => (
    <ExampleShowcase sx={{ overflow: 'hidden' }}>
        <Box sx={{ mb: 2, overflow: 'hidden', height: 400 }}>
            <AppBar
                classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
                sx={{
                    '&.collapsed': {
                        '& .BluiThreeLiner-title': {
                            fontSize: '1.25rem',
                            fontWeight: 600,
                        },
                        '& .BluiThreeLiner-subtitle': {
                            fontSize: 0,
                        },
                        '& .BluiThreeLiner-info': {
                            fontSize: '1rem',
                            fontWeight: 400,
                            mt: '-0.25rem',
                        },
                        '.BluiAppBar-background': {
                            display: 'none',
                        },
                    },
                    '&.expanded': {
                        '& .BluiThreeLiner-root': {
                            top: 64,
                        },
                    },
                    width: 450,
                    mx: 'auto',
                    zIndex: 'auto',
                }}
                scrollContainerId={'appbarBodyFiller2'}
                position={'sticky'}
                backgroundImage={BackgroundImage}
            >
                <Toolbar>
                    <IconButton color={'inherit'} edge={'start'}>
                        <Menu />
                    </IconButton>
                    <ThreeLiner
                        title={'Title'}
                        subtitle={'Subtitle'}
                        info={'Info'}
                        animationDuration={300}
                        sx={{
                            top: 0,
                            position: 'relative',
                            marginLeft: 4,
                        }}
                    />
                    <Spacer />
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <IconButton color={'inherit'}>
                            <Search />
                        </IconButton>
                        <IconButton color={'inherit'}>
                            <Download />
                        </IconButton>
                        <IconButton color={'inherit'} edge={'end'}>
                            <MoreVert />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                id="appbarBodyFiller2"
                sx={{
                    height: 400,
                    overflow: 'scroll',
                    backgroundColor: 'background.paper',
                    width: 450,
                    mx: 'auto',
                }}
            >
                {getBodyFiller()}
            </Box>
        </Box>
    </ExampleShowcase>
);
