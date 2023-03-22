import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box/Box';
import * as Colors from '@brightlayer-ui/colors';

export type ComponentPreviewProps = HTMLAttributes<HTMLDivElement> & {
    previewContent: JSX.Element;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = (props): JSX.Element => {
    const { previewContent } = props;

    return (
        <Box
            sx={{
                p: 2,
                /**
                 * We take the height of the appbar/tabs out of the 70vh portion
                 * 64px (56 on xs) for AppBar + 49px for Tabs = 113/105
                 * */
                height: { xs: 'calc(70vh - 105px)', sm: 'calc(70vh - 113px)' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: Colors.white[200],
            }}
        >
            {previewContent}
        </Box>
    );
};

export default ComponentPreview;
