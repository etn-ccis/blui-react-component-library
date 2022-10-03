import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps, Theme } from '@mui/material/styles';
import { MASTER_BRANCH } from '.';

type FullCodeOnGithubProps = {
    url: string;
    sx?: SxProps<Theme>;
};

export const FullCodeOnGithub: React.FC<FullCodeOnGithubProps> = (props) => (
    <Button
        variant="outlined"
        target="_blank"
        href={`${MASTER_BRANCH}/${props.url}`}
        startIcon={<GitHubIcon />}
        sx={props.sx}
    >
        Full Code on GitHub
    </Button>
);
