import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    createProps,
    getBodyFiller,
    getImage,
} from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { AppBar } from '@brightlayer-ui/react-components/core/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box/Box';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { generateCodeSnippet } from './utils';
import { PLAYGROUND_DRAWER_WIDTH } from '../../../shared';

export const PreviewComponent = (): JSX.Element => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'));
    const appBarJson = useAppSelector((state: RootState) => state.componentsPropsState.appBarComponent);

    const appBarProps = createProps(appBarJson.props as PropsType[]);


    return (
        <PreviewComponentWithCode
            // sx={{ width: isMobile ? '100%' : PLAYGROUND_DRAWER_WIDTH, }}
            previewContent={
                <Box
                    sx={{
                        overflow: 'hidden',
                        width: isMobile ? '100%' : PLAYGROUND_DRAWER_WIDTH,
                        maxWidth: 450,
                        maxHeight: 400,
                        position: 'relative',
                    }}
                >
                    <AppBar
                        animationDuration={appBarProps.animationDuration}
                        backgroundImage={getImage(appBarProps.backgroundImage)}
                        collapsedHeight={
                            appBarProps.collapsedHeight === '' ? (isMobile ? 56 : 64) : appBarProps.collapsedHeight
                        }
                        expandedHeight={appBarProps.expandedHeight === '' ? 200 : appBarProps.expandedHeight}
                        scrollContainerId={'appbarBodyFiller1'}
                        scrollThreshold={appBarProps.scrollThreshold}
                        variant={appBarProps.variant}
                    >
                        <Toolbar>
                            <Typography variant="h6">Title</Typography>
                        </Toolbar>
                    </AppBar>
                    <Box id={'appbarBodyFiller1'} sx={{ height: 400, overflow: 'scroll' }}>
                        {getBodyFiller()}
                    </Box>
                </Box>
            }

            code={isMobile ? generateCodeSnippet(appBarJson, appBarProps, theme) : undefined}
        />
    );
};
