import React, { HTMLAttributes, useEffect } from 'react';
import Prism from 'prismjs';

export type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
    code: string;
    language: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = (props): JSX.Element => {
    const { code, language, ...divProps } = props;
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div {...divProps} className="Code">
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};
