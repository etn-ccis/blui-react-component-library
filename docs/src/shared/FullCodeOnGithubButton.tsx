import React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps, Theme } from '@mui/material/styles';
import { DOCS_BRANCH } from './constants';

type FullCodeOnGithubProps = {
    url: string;
    sx?: SxProps<Theme>;
};

export const FullCodeOnGithub: React.FC<FullCodeOnGithubProps> = (props) => (
    <Button
        variant="outlined"
        target="_blank"
        href={`https://github.com/etn-ccis/blui-react-component-library/blob/${DOCS_BRANCH}/docs/src/${props.url}`}
        startIcon={<GitHubIcon />}
        sx={props.sx}
    >
        Full Code on GitHub
    </Button>
);
