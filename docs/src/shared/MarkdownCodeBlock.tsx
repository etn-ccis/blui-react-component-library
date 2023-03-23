import React, { useEffect } from 'react';
import Prism from 'prismjs';
import Box, { BoxProps } from '@mui/material/Box';
import * as Colors from '@brightlayer-ui/colors';

export type MarkdownCodeBlockProps = BoxProps & {
    code: string;
    language: string;
};

export const MarkdownCodeBlock: React.FC<MarkdownCodeBlockProps> = (props): JSX.Element => {
    const { code, language = 'sh', sx, ...boxProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return (
        <Box
            sx={[
                {
                    height: 'auto',
                    fontSize: '14px',
                    display: 'flex',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...boxProps}
            className="Code"
        >
            <pre
                style={{
                    margin: 0,
                    width: '100%',
                    backgroundColor: Colors.black[800],
                    borderRadius: 4,
                }}
            >
                <code style={{ fontFamily: '"Roboto Mono", monospace' }} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </Box>
    );
};
