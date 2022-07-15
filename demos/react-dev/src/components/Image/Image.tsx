import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box';

type ImageProps = HTMLAttributes<HTMLDivElement> & {
    src: string;
};

export const Image: React.FC<ImageProps> = (props): JSX.Element => {
    const { src, ...rootProps } = props;

    return (
        <Box
            sx={{
                width: '100%',
                textAlign: 'center',
            }}
        >
            <Box component="img" src={src} {...rootProps} />
        </Box>
    );
};
Image.displayName = 'Image';
