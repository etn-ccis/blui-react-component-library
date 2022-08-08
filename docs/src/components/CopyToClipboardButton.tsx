import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import React, { useState } from 'react';
import { copyTextToClipboard } from '../shared';
import { isMobile } from 'react-device-detect';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

type Position = 'bottom' | 'top' | 'left' | 'right';
type CopyToClipboardProps = Omit<
    Omit<Omit<Omit<Omit<Omit<TooltipProps, 'placement'>, 'open'>, 'children'>, 'onMouseEnter'>, 'onMouseLeave'>,
    'title'
> & {
    duration?: number;
    position?: Position;
    title?: string;
    copiedPosition?: Position;
    copiedTitle?: string;
    copyText: string;
};
export const CopyToClipboard: React.FC<CopyToClipboardProps> = (props) => {
    const {
        duration = 1000,
        position = 'bottom',
        title = '',
        copiedPosition = 'bottom',
        copiedTitle = 'Copied',
        copyText,
        ...otherProps
    } = props;
    const [isCopied, setIsCopied] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    return isMobile ? null : (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip
                {...otherProps}
                title={isCopied ? copiedTitle : title}
                placement={isCopied ? copiedPosition : position}
                open={showTooltip}
            >
                <Button
                    variant="outlined"
                    startIcon={
                        <CopyAllIcon
                            sx={{
                                fontSize: 16,
                                cursor: 'pointer',
                            }}
                            onMouseEnter={(): void => {
                                if (!isCopied) setShowTooltip(true);
                            }}
                            onMouseLeave={(): void => {
                                if (!isCopied) setShowTooltip(false);
                            }}
                        />
                    }
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
                >
                    Copy All
                </Button>
            </Tooltip>
        </Box>
    );
};
