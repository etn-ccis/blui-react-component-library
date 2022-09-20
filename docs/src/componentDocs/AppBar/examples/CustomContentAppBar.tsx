import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { CustomContentAppBarExample } from './CustomContentAppBarExample';

const codeSnippet = `<Box>
    <AppBar
        classes={{ collapsed: 'collapsed', expanded: 'expanded' }}
        sx={{
            '&.collapsed': {
                '& .BluiThreeLiner-subtitle': {
                    fontSize: 0,
                },
                '.BluiAppBar-background': {
                    display: 'none',
                },
            },
            '&.expanded': {
                '& .BluiThreeLiner-root': {
                    top: 64,
                },
            },
        }}
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
            <Box style={{ display: 'flex', flexDirection: 'row' }}>
                <IconButton color={'inherit'}>
                    <Search />
                </IconButton>
                <IconButton color={'inherit'}>
                    <Download />
                </IconButton>
                <IconButton color={'inherit'}>
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

export const CustomContentAppBar = (): JSX.Element => (
    <Box>
        <CustomContentAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-46" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AppBar/examples/CustomContentAppBarExample.tsx"
        />
    </Box>
);
