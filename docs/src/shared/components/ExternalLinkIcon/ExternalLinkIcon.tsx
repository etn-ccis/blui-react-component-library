import React from 'react';
import { OpenInNew } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import * as Colors from '@brightlayer-ui/colors';

type ExternalLinkIconProps = {
    url?: string;
};

export const ExternalLinkIcon = (props: ExternalLinkIconProps): JSX.Element => {
    const { url = '#' } = props;
    return (
        <IconButton sx={{ ml: 1 }} target="_blank" href={url}>
            <OpenInNew sx={{ color: Colors.gray[200] }} />
        </IconButton>
    );
};
