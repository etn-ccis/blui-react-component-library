import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

interface FullCodeOnGithubProps {
    url: string;
}

export const FullCodeOnGithub: React.FC<FullCodeOnGithubProps> = (props) => {
    const { url, ...otherButtonProps } = props;

    const release =
        'https://github.com/brightlayer-ui/react-component-library/blob/feature/3290-full-code-on-gh-poc/docs/src';
    return (
        <Button
            {...otherButtonProps}
            sx={{ ml: 2 }}
            variant="outlined"
            target="_blank"
            href={`${release}/${url}`}
            startIcon={<GitHubIcon />}
        >
            Full Code on GitHub
        </Button>
    );
};
