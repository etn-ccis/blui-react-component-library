import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { store } from '../store';
import * as PXBThemes from '@pxblue/react-themes';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const RTLThemeProvider = (props) => {
    useEffect(() => {
        document.body.dir = props.rtl ? 'rtl' : 'ltr';
    }, [props.rtl]);
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider
                theme={createMuiTheme(
                    Object.assign(store.getState().theme === 'light' ? PXBThemes.blue : PXBThemes.blueDark, {
                        direction: props.rtl ? 'rtl' : 'lrt',
                    })
                )}
            >
                {props.children}
            </ThemeProvider>
        </StylesProvider>
    );
};
