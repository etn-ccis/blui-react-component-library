import React, { useEffect } from 'react';
import Prism from 'prismjs';
import Box, { BoxProps } from '@mui/material/Box';
import * as Colors from '@brightlayer-ui/colors';

export type CodeBlockProps = BoxProps & {
    code: string;
    language: string;
    dataLine?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
    const { code, language, dataLine, sx, ...boxProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return (
        <Box
            sx={[
                {
                    '.line-highlight::before': {
                        display: 'none',
                    },
                    '.line-highlight::after': { display: 'none' },
                    height: '100%',
                    display: 'flex',
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...boxProps}
            className="Code"
        >
            <pre
                data-line={dataLine}
                style={{
                    margin: 0,
                    width: '100%',
                    backgroundColor: Colors.black[800],
                    borderRadius: 4,
                }}
            >
                <code style={{ fontFamily: 'monospace' }} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </Box>
    );
};
