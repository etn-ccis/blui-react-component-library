import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AppBarWithAdditionalContentExample } from './AppBarWithAdditionalContentExample';

const codeSnippet = `<Box>
    <AppBar
        scrollContainerId={'appbarBodyFiller2'}
        position={'sticky'}
        backgroundImage={BackgroundImage}
    >
        <Toolbar>
            <IconButton color={'inherit'} edge={'start'}>
                <Menu />
            </IconButton>
            <ThreeLiner
                title={'Title'}
                subtitle={'Subtitle'}
                info={'Info'}
                animationDuration={300}
            />
            <Spacer />
            <Box>
                <IconButton color={'inherit'}>
                    <Search />
                </IconButton>
                <IconButton color={'inherit'}>
                    <Download />
                </IconButton>
                <IconButton color={'inherit'} edge={'end'}>
                    <MoreVert />
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
    <Box id='appbarBodyFiller2'>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const AppBarWithAdditionalContent = (): JSX.Element => (
    <Box>
        <AppBarWithAdditionalContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="7-29" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AppBar/examples/AppBarWithAdditionalContentExample.tsx"
        />
    </Box>
);
