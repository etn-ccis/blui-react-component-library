import React, { HTMLAttributes, useEffect } from 'react';
import Prism from 'prismjs';
import Box from '@mui/material/Box';

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
    code: string;
    language: string;
    dataLine?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
    const { code, language, dataLine, ...divProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <Box
            sx={{
                '.line-highlight::before': {
                    display: 'none',
                },
                '.line-highlight::after': {
                    display: 'none',
                },
            }}
            {...divProps}
            className="Code"
        >
            <pre data-line={dataLine}>
                <code style={{ fontFamily: 'monospace' }} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </Box>
    );
};
