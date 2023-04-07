import React from 'react';
import { DOCS_BRANCH } from '../constants';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

// This blurb gets strange styling when used directly in markdown files
export const ForMoreDetailsOnStylingOptions = (): JSX.Element => {
    const theme = useTheme();

    return (
        <Box sx={{ color: 'text.primary', mb: 2 }}>
            For more details on styling options check out our{' '}
            <a
                href={`https://github.com/etn-ccis/blui-react-component-library/blob/${DOCS_BRANCH}/docs/src/shared/markdown/StyleOverridesGuide.md`}
                style={{ color: theme.palette.primary.main }}
            >
                Styling Guide
            </a>
            .
        </Box>
    );
};
