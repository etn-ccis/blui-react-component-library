import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { copyTextToClipboard } from '../shared';
import { isMobile } from 'react-device-detect';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Button from '@mui/material/Button';

type Position = 'bottom' | 'top' | 'left' | 'right';
type CopyToClipboardProps = {
    duration?: number;
    position?: Position;
    title?: string;
    copiedTitle?: string;
    copyText: string;
    toolTipProps?: TooltipProps;
};

export const CopyToClipboard: React.FC<CopyToClipboardProps> = (props) => {
    const { duration = 1000, position = 'bottom', title = '', copiedTitle = 'Copied', copyText, toolTipProps } = props;
    const [isCopied, setIsCopied] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    return isMobile ? null : (
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
            >
                Copy All
            </Button>
        </Tooltip>
    );
};
