import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import { Github } from '@brightlayer-ui/icons-mui';
import Mail from '@mui/icons-material/Mail';
import { SharedAppBar } from '../layout';
import { Theme } from '@mui/material';
import { PADDING } from '../shared/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import { listOfAllBluiReactPackages } from '../__configuration__/listOfAllBluiReactPackages';
import CirclesImage from '../assets/circles.svg';

const CONTENT_WIDTH = 800;

const styles = {
    pageRoot: {
        background: (theme: Theme): string =>
            `url('${CirclesImage}') no-repeat center/200%, ${theme.vars.palette.primary.main}`,
        minHeight: '100%',
        color: 'primary.contrastText',
    },
    content: {
        maxWidth: CONTENT_WIDTH,
        my: 9,
        mx: 'auto',
        padding: `${PADDING}px`,
    },
    pageTitle: {
        '& .MuiTypography-root': {
            fontFamily: `"Roboto Mono", monospace !important`,
        },
        height: 200,
    },
    dollarSign: {
        position: 'relative',
        right: '1em',
        top: 'calc( 1em + 10px )',
        opacity: 0.5,
    },
    packageStats: {
        maxWidth: (CONTENT_WIDTH - PADDING * 2) / 2,
    },
    buttons: {
        contained: { color: 'primary.main', backgroundColor: 'primary.contrastText' },
        outlined: {
            color: 'primary.contrastText',
            borderColor: 'primary.contrastText',
            '*:where(.dark) &.MuiButton-root':{
                borderColor: 'primary.contrastText',
            }
        },
    
    },
};

export const HomePage = (): JSX.Element => {
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
    const [totalDownloadCount, setTotalDownloadCount] = React.useState(0);

    React.useEffect(() => {
        setTotalDownloadCount(0);
        listOfAllBluiReactPackages.forEach((packageName) => {
            void fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`)
                .then((res) => res.json())
                .then((res) => setTotalDownloadCount((count) => count + (res.downloads as number)));
        });
    }, []);

    return (
        <Box sx={styles.pageRoot}>
            <SharedAppBar title={''} />
            <Stack sx={styles.content} gap={8}>
                <Box sx={styles.pageTitle}>
                    <Typography variant={lgUp ? 'h2' : 'h3'}>
                        {lgUp && (
                            <Box component={'span'} sx={styles.dollarSign}>
                                $
                            </Box>
                        )}
                        <Typewriter
                            options={{
                                strings: [
                                    'Brightlayer UI',
                                    'React Developer Documentation',
                                    'Components, Themes, Workflows',
                                ],
                                autoStart: true,
                                loop: true,
                                cursor: '_',
                            }}
                        />
                    </Typography>
                </Box>
                <Stack direction={'row'} gap={lgUp ? 5 : 4} flexWrap={'wrap'}>
                    <Stack sx={styles.packageStats}>
                        <Typography variant={'body1'}>Total React Packages</Typography>
                        <Typography variant={'h4'}>
                            <CountUp end={listOfAllBluiReactPackages.length} />
                        </Typography>
                    </Stack>
                    <Stack sx={styles.packageStats}>
                        <Typography variant={'body1'}>Downloads in Last 30 Days</Typography>
                        <Typography variant={'h4'}>
                            <CountUp end={totalDownloadCount} />
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                    <Button
                        href={`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''}/getting-started/environment`}
                        variant={'contained'}
                        disableElevation
                        sx={styles.buttons.contained}
                    >
                        Get Started
                    </Button>
                    <Button
                        href="https://github.com/etn-ccis?q=blui"
                        variant={'outlined'}
                        startIcon={<Github />}
                        sx={styles.buttons.outlined}
                    >
                        Find Us on GitHub
                    </Button>
                    <Button
                        href="mailto:brightlayer-ui@eaton.com"
                        variant={'outlined'}
                        startIcon={<Mail />}
                        sx={styles.buttons.outlined}
                    >
                        Contact Us
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
