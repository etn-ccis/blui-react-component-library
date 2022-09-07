import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box/Box';
import { CodeBlock } from './CodeBlock';

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
                    padding: '1rem 1rem 0',
                    height: '68vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {previewContent}
            </Box>
            <Box
                sx={{
                    height: '32vh',
                    overflow: 'auto',
                    boxSizing: 'border-box',
                }}
                onMouseEnter={(): void => setShow(!show)}
                onMouseLeave={(): void => setShow(false)}
            >
                <CodeBlock code={code} language="jsx" />
            </Box>
        </>
    );
};

export default PreviewComponentWithCode;
