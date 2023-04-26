import React, { HTMLAttributes } from 'react';
import Box, { BoxProps } from '@mui/material/Box/Box';
import * as Colors from '@brightlayer-ui/colors';

export type ComponentPreviewProps = HTMLAttributes<HTMLDivElement> &
    BoxProps & {
        previewContent: JSX.Element;
    };

const ComponentPreview: React.FC<ComponentPreviewProps> = (props): JSX.Element => {
    const { previewContent, sx } = props;

    return (
        <Box
            sx={[
                {
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: Colors.white[200],
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {previewContent}
        </Box>
    );
};

export default ComponentPreview;
