import React from 'react';
import Box from '@mui/material/Box';
import ComponentPreview from './ComponentPreview';
import PlaygroundControls from './PlaygroundControls';
import { PlaygroundComponent } from './types';

type PlaygroundProps = {
    previewContent: JSX.Element;
    controlData: PlaygroundComponent;
};

export const Playground: React.FC<PlaygroundProps> = (props): JSX.Element => {
    const { previewContent, controlData } = props;

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <ComponentPreview previewContent={previewContent} />
            <PlaygroundControls controlData={controlData} />
        </Box>
    );
};
