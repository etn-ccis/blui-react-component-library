import React, { HTMLAttributes } from 'react';
import Box, { BoxProps } from '@mui/material/Box/Box';
import * as Colors from '@brightlayer-ui/colors';
import { CopyToClipboardButton } from './CopyToClipboardButton';
import { CodeBlock } from './CodeBlock';

export type SourceCodeViewerProps = HTMLAttributes<HTMLDivElement> &
    BoxProps & {
        code: string;
    };

const SourceCodeViewer: React.FC<SourceCodeViewerProps> = (props): JSX.Element => {
    const { code, sx } = props;
    const [show, setShow] = React.useState(false);

    return (
        <Box
            sx={[
                {
                    height: '100%',
                    overflow: 'auto',
                    boxSizing: 'border-box',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            onMouseEnter={(): void => setShow(!show)}
            onMouseLeave={(): void => setShow(false)}
        >
            <CodeBlock code={code} language="jsx" />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '400px',
                }}
            >
                {show && (
                    <CopyToClipboardButton
                        copyButtonProps={{
                            sx: {
                                color: Colors.blue[200],
                                borderColor: Colors.blue[200],
                                backgroundColor: Colors.black[800],
                                '&:hover': { borderColor: Colors.blue[200], backgroundColor: Colors.black[800] },
                            },
                        }}
                        title={'Copy All'}
                        copyText={code}
                    />
                )}
            </Box>
        </Box>
    );
};

export default SourceCodeViewer;
