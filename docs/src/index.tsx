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
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store } from './redux/store';
import { MDXProvider } from '@mdx-js/react';

const container = document.getElementById('root');

if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
            <BrowserRouter>
                <CssBaseline />
                <Provider store={store}>
                    <MDXProvider>
                        <App />
                    </MDXProvider>
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
