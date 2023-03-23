import React from 'react';
import Box from '@mui/material/Box';
import ComponentPreview from './ComponentPreview';
import PlaygroundControls from './PlaygroundControls';
import { PlaygroundComponent } from './types';
import SourceCodeViewer from './SourceCodeViewer';

type PlaygroundProps = {
    previewContent: JSX.Element;
    sourceCode: string;
    controlsConfig: PlaygroundComponent;
    playgroundDrawerWidth?: number;
};

export const Playground: React.FC<PlaygroundProps> = (props): JSX.Element => {
    const { previewContent, sourceCode, controlsConfig, playgroundDrawerWidth = 375 } = props;

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingRight: `${playgroundDrawerWidth}px`,
                }}
            >
                <ComponentPreview previewContent={previewContent} />
                <SourceCodeViewer code={sourceCode} />
            </Box>
            <PlaygroundControls controlsConfig={controlsConfig} playgroundDrawerWidth={playgroundDrawerWidth} />
        </Box>
    );
};
