import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Theme, SxProps } from '@mui/material/styles';

type Position = 'bottom' | 'top' | 'left' | 'right';

type CopyButtonProps = {
    sx?: SxProps<Theme>;
};

type CopyToClipboardProps = {
    duration?: number;
    position?: Position;
    title?: string;
    copiedTitle?: string;
    copyText: string;
    toolTipProps?: TooltipProps;
    copyButtonProps?: CopyButtonProps;
};

export function copyTextToClipboard(text: string, onCopied?: () => void): void {
    void navigator.clipboard.writeText(text);
    if (onCopied) onCopied();
}

export const CopyToClipboardButton: React.FC<CopyToClipboardProps> = (props) => {
    const {
        duration = 1000,
        position = 'bottom',
        title = '',
        copiedTitle = 'Copied',
        copyText,
        toolTipProps,
        copyButtonProps,
    } = props;
    const [isCopied, setIsCopied] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    return isMobile ? null : (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip {...toolTipProps} title={isCopied ? copiedTitle : title} placement={position} open={showTooltip}>
                <Button
                    variant="outlined"
                    onMouseEnter={(): void => {
                        if (!isCopied) setShowTooltip(true);
                    }}
                    onMouseLeave={(): void => {
                        if (!isCopied) setShowTooltip(false);
                    }}
                    onClick={(): void => {
                        copyTextToClipboard(copyText, () => {
                            setIsCopied(true);
                            setShowTooltip(true);
                            setTimeout(() => {
                                setShowTooltip(false);
                                setTimeout(() => setIsCopied(false), 200);
                            }, duration);
                        });
                    }}
                    startIcon={<CopyAllIcon />}
                    {...copyButtonProps}
                    sx={{ ...copyButtonProps?.sx }}
                >
                    Copy All
                </Button>
            </Tooltip>
        </Box>
    );
};
