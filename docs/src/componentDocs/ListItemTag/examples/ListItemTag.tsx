/* eslint-disable */
import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ListItemTagExample } from './ListItemTagExample';
import Button from '@mui/material/Button';
import axios from 'axios';
import { getParameters } from 'codesandbox/lib/api/define';
const codeSnippet = `import React from 'react';
                
const Demo = () => {
return (<div>
        You are seeing the demo
    </div>)
}
export default Demo`;

export const ListItemTag = (): JSX.Element => {
    const parameters = getParameters({
        files: {
            'public/index.html': {
                content: `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>Title</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <!-- Fonts to support Material Design -->
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                      rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                    />
                    <!-- Icons to support Material Design -->
                    <link
                      rel="stylesheet"
                      href=#"
                    />
                  </head>
                  <body>
                    <div id="root"></div>
                  </body>
                </html>`,
                isBinary: true,
            },
            [`src/Demo.tsx`]: {
                content: codeSnippet,
                isBinary: false,
            },
            [`src/index.tsx`]: {
                content: `import * as React from 'react';
                import * as ReactDOM from 'react-dom/client';
                import { StyledEngineProvider } from '@mui/material/styles';
                import Demo from './Demo'
                ReactDOM.createRoot(document.querySelector("#root")).render(
                  <React.StrictMode>
                    <StyledEngineProvider injectFirst>
                      <Demo />
                    </StyledEngineProvider>
                  </React.StrictMode>
                );`,
                isBinary: true,
            },
            'package.json': {
                /* @ts-ignore */
                content: {
                    dependencies: {
                        react: 'latest',
                        'react-dom': 'latest',
                        '@mui/material': 'latest',
                        '@emotion/styled': 'latest',
                        '@emotion/react': 'latest',
                    },
                },
            },
        },
    });

    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

    return (
        <Box>
            <ListItemTagExample />
            <CodeBlock code={codeSnippet} language="jsx" />
            <Button sx={{ mt: 1 }} variant="outlined" target="_blank" href={url}>
                Edit In Codesandbox
            </Button>
            <CodeBlockActionButtonRow
                copyText={codeSnippet}
                url="componentDocs/ListItemTag/examples/ListItemTagExample.tsx"
            />
        </Box>
    );
};
