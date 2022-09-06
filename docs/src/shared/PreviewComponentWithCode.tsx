import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box/Box';
import { CodeBlock } from './CodeBlock';
import { CopyToClipboard } from './CopyToClipboardButton';

export type PreviewComponentProps = HTMLAttributes<HTMLDivElement> & {
    previewContent: JSX.Element;
    code: string;
};

const PreviewComponentWithCode: React.FC<PreviewComponentProps> = (props): JSX.Element => {
    const { previewContent, code } = props;
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Box
                sx={{
                    p: 2,
                    height: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 6,
                }}
            >
                {previewContent}
            </Box>
            <Box
                sx={{
                    height: '30vh',
                    overflow: 'auto',
                    boxSizing: 'border-box',
                }}
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
                    {show && <CopyToClipboard title={'Copy All'} copyText={code} />}
                </Box>
            </Box>
        </>
    );
};

export default PreviewComponentWithCode;
