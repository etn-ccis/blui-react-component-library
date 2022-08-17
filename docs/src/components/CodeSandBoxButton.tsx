import React from 'react';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { SxProps, Theme } from '@mui/material/styles';

interface FullCodeOnGithubProps {
    url: string;
    sx?: SxProps<Theme>;
}

export const CodeSandBox: React.FC<FullCodeOnGithubProps> = (props) => {
    const { url, sx } = props;

    return (
        <Button variant="outlined" target="_blank" href={url} startIcon={<CodeIcon />} sx={sx}>
            SandBox
        </Button>
    );
};
