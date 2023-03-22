import React, { HTMLAttributes, useEffect } from 'react';
import Prism from 'prismjs';
import Box from '@mui/material/Box';
import * as Colors from '@brightlayer-ui/colors';

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
    /** The code to be rendered */
    code: string;
    /** The language to be added as a class
     *
     * Default: 'ts'
     */
    language: string;
    /** The range of code lines to highlight
     *
     * Default: undefined
     */
    dataLine?: string;
};

/**
 * CodeBlock component
 *
 * Used to show snippet of code.
 * You may also include a range of code lines to highlight.
 */
export const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
    const { code, language = 'ts', dataLine, ...divProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, [code]);
    return (
        <Box
            sx={{
                '.line-highlight::before': {
                    display: 'none',
                },
                '.line-highlight::after': {
                    display: 'none',
                },
                height: '100%',
                display: 'flex',
            }}
            {...divProps}
            className="Code"
        >
            <pre
                data-line={dataLine}
                style={{ margin: 0, width: '100%', backgroundColor: Colors.black[800], borderRadius: 4 }}
            >
                <code style={{ fontFamily: 'monospace' }} className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </Box>
    );
};
