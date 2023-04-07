import React, { HTMLAttributes } from 'react';
import Box from '@mui/material/Box';
import { SharedAppBar } from '../layout';
import { ComponentPreviewTabs } from '../shared';

export type ComponentPreviewPageProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
};
export const ComponentPreviewPage: React.FC<ComponentPreviewPageProps> = (props): JSX.Element => {
    const { title } = props;

    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <SharedAppBar title={title} />
            <ComponentPreviewTabs />
        </Box>
    );
};
