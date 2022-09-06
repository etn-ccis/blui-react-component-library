import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps, Theme } from '@mui/material/styles';

type FullCodeOnGithubProps = {
    url: string;
    sx?: SxProps<Theme>;
};

export const FullCodeOnGithub: React.FC<FullCodeOnGithubProps> = (props) => {
    const { url, sx } = props;

    const release =
        'https://github.com/brightlayer-ui/react-component-library/blob/feature/3425-componentize-copy-code-and-github-button/docs/src';
    return (
        <Button variant="outlined" target="_blank" href={`${release}/${url}`} startIcon={<GitHubIcon />} sx={sx}>
            Full Code on GitHub
        </Button>
    );
};
