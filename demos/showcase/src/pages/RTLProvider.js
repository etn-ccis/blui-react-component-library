import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/react-themes';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const RTLProvider = (props) => {
    if (!props.rtl) return props.children;
    return (
        <StylesProvider jss={jss}>
            <div dir={'rtl'}>
                <ThemeProvider theme={createMuiTheme(Object.assign(PXBThemes.blue, { direction: 'rtl' }))}>
                    {props.children}
                </ThemeProvider>
            </div>
        </StylesProvider>
    );
};
