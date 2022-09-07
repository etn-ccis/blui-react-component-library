import React from 'react';
import Box from '@mui/material/Box';
import { CopyToClipboard } from './CopyToClipboardButton';
import { FullCodeOnGithub } from './FullCodeOnGithubButton';

export type CodeBlockActionButtonRowProps = {
    shouldRenderCopyButton?: boolean;
    shouldRenderGithubButton?: boolean;
    copyText?: string;
    title?: string;
    url?: string;
};

export const CodeBlockActionButtonRow: React.FC<CodeBlockActionButtonRowProps> = (props): JSX.Element => {
    const { title = 'Copy All', shouldRenderCopyButton = true, shouldRenderGithubButton = true, copyText = '', url='#' } = props;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            {shouldRenderCopyButton && <CopyToClipboard title={title} copyText={copyText} />}
            {shouldRenderGithubButton && <FullCodeOnGithub sx={{ ml: 1 }} url={url} />}
        </Box>
    );
};
