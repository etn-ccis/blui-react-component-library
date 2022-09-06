import React, { HTMLAttributes, useEffect } from 'react';
import Prism from 'prismjs';
import Box from '@mui/material/Box';
import { CopyToClipboard } from './CopyToClipboardButton';
import { FullCodeOnGithub } from './FullCodeOnGithubButton';

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
    code: string;
    language: string;
    dataLine?: string;
    copyText: string;
    title?: string;
    url: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
    const { code, language, dataLine, title = 'Copy All', ...divProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return (
        <Box>
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
                <pre data-line={dataLine} style={{ margin: 0 }}>
                    <code style={{ fontFamily: 'monospace' }} className={`language-${language}`}>
                        {code}
                    </code>
                </pre>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <CopyToClipboard title={title} copyText={props.copyText} />
                <FullCodeOnGithub sx={{ ml: 1 }} url={props.url} />
            </Box>
        </Box>
    );
};
