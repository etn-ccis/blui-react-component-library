import React from 'react';
import Box from '@mui/material/Box';
import { CopyToClipboard } from './CopyToClipboardButton';
import { FullCodeOnGithub } from './FullCodeOnGithubButton';

type CodeActionButtonsProps = {
    copyText: string;
    title?: string;
    url: string;
};

export const CodeActionButtons = (props: CodeActionButtonsProps): JSX.Element => {
    const { title = 'Copy All' } = props;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={title} copyText={props.copyText} />
            <FullCodeOnGithub sx={{ ml: 1 }} url={props.url} />
        </Box>
    );
};
