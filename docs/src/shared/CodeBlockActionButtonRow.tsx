import React from 'react';
import Box from '@mui/material/Box';
import { CopyToClipboard } from './CopyToClipboardButton';
import { FullCodeOnGithub } from './FullCodeOnGithubButton';
import { SxProps } from '@mui/material/styles';
import { TooltipProps } from '@mui/material/Tooltip';

type Position = 'bottom' | 'top' | 'left' | 'right';

export type CodeBlockActionButtonRowProps = {
    copyText?: string;
    title?: string;
    url?: string;
    sx?: SxProps;
    duration?: number;
    position?: Position;
    copiedTitle?: string;
    toolTipProps?: TooltipProps;
};

export const CodeBlockActionButtonRow: React.FC<CodeBlockActionButtonRowProps> = (props): JSX.Element => {
    const { title = 'Copy All', copyText = '', url = '', sx } = props;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, ...sx }}>
            {copyText !== '' && (
                <CopyToClipboard
                    title={title}
                    copyText={copyText}
                    duration={props.duration}
                    position={props.position}
                    copiedTitle={props.copiedTitle}
                    toolTipProps={props.toolTipProps}
                />
            )}
            {url !== '' && <FullCodeOnGithub sx={{ ml: 1 }} url={url} />}
        </Box>
    );
};
