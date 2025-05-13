/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import useMediaQuery from '@mui/material/useMediaQuery';
import '@brightlayer-ui/react-themes/open-sans';
import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store, RootState } from './redux/store';
import { useAppSelector } from './redux/hooks';
import { MDXProvider } from '@mdx-js/react';
import { componentsMap } from './__configuration__/markdownMapping';
import { GoogleAnalyticsWrapper } from './router/GoogleAnalyticsWrapper';
import type {} from '@mui/material/themeCssVarsAugmentation';

// prismJs
import 'prismjs/components/prism-jsx.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

// google analytics
import ReactGA from 'react-ga4';
import { ScrollToTop } from './router/ScrollToTop';
if (process.env.REACT_APP_GAID) {
    ReactGA.initialize(process.env.REACT_APP_GAID, { gaOptions: { cookieDomain: 'auto' } });
}
// TODO: Remove this after the issues with @types/react goes away
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/68444
/* eslint-disable */
declare global {
    namespace React {
        interface DOMAttributes<T> {
            placeholder?: string | undefined;
            onPointerEnterCapture?: string | undefined;
            onPointerLeaveCapture?: string | undefined;
        }
    }
}
/* eslint-enable */
// Brightlayer UI Icon font
require('@brightlayer-ui/icons/BrightlayerUIIcons.css');
const container = document.getElementById('root');

if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);
const basename = process.env.PUBLIC_URL || '/';

const ThemedApp = (): JSX.Element => {
    const siteTheme = useAppSelector((state: RootState) => state.appState.siteTheme);
    const siteDirection = useAppSelector((state: RootState) => state.appState.siteDirection);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    theme.direction = siteDirection;
    document.dir = siteDirection;

    // force an update
    const MemoThemedApp = React.useCallback(
        () => (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MDXProvider components={componentsMap as any}>
                    <App />
                </MDXProvider>
            </ThemeProvider>
        ),
        [siteTheme, siteDirection, prefersDarkMode]
    );
    return <MemoThemedApp />;
};

root.render(
    <StyledEngineProvider injectFirst>
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <GoogleAnalyticsWrapper />
            <Provider store={store}>
                <ThemedApp />
            </Provider>
        </BrowserRouter>
    </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
