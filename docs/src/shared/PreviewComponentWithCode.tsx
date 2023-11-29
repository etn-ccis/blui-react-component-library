import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box/Box';
import { CodeBlock, CopyToClipboard } from '.';
import * as Colors from '@brightlayer-ui/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

export type PreviewComponentProps = HTMLAttributes<HTMLDivElement> & {
    previewContent: JSX.Element;
    code?: string;
};

const PreviewComponentWithCode: React.FC<PreviewComponentProps> = (props): JSX.Element => {
    const { previewContent, code } = props;
    const [show, setShow] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box
                sx={{
                    p: 2,
                    /**
                     * We take the height of the appbar/tabs out of the 70vh portion
                     * 64px (56 on xs) for AppBar + 49px for Tabs = 113/105
                     * */
                    height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    overflow: 'hidden',
                }}
            >
                {previewContent}
            </Box>
            {!isMobile && (
                <Box
                    sx={{
                        height: '30vh',
                        overflow: 'auto',
                        boxSizing: 'border-box',
                    }}
                    onMouseEnter={(): void => setShow(!show)}
                    onMouseLeave={(): void => setShow(false)}
                >
                    {code && <CodeBlock code={code} language="jsx" sx={{ height: '100%' }} />}

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '16px',
                            right: '400px',
                        }}
                    >
                        {show && code && (
                            <CopyToClipboard
                                copyButtonProps={{
                                    sx: {
                                        color: Colors.blue[200],
                                        borderColor: Colors.blue[200],
                                        backgroundColor: Colors.black[800],
                                        '&:hover': {
                                            borderColor: Colors.blue[200],
                                            backgroundColor: Colors.black[800],
                                        },
                                    },
                                }}
                                title={'Copy All'}
                                copyText={code}
                            />
                        )}
                    </Box>
                </Box>
            )}
        </>
    );
};

export default PreviewComponentWithCode;
