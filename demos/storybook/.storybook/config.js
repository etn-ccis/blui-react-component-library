import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue as ReactTheme } from '@pxblue/react-themes';
import { blueDark as ReactThemeDark } from '@pxblue/react-themes';
import * as Colors from '@pxblue/colors';
import 'typeface-open-sans';
import { pxblueTheme } from '@pxblue/storybook-themes';
import { useDarkMode } from 'storybook-dark-mode';

const newViewports = {
    iPhone5: {
        name: 'iPhone 5',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iPhone6: {
        name: 'iPhone 6',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iPad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
};

pxblueTheme.brandTitle = 'PX Blue React Component Library';
pxblueTheme.brandImage = require('../assets/pxblue-react.svg');
pxblueTheme.brandUrl = 'https://pxblue.github.io';

addParameters({
    name: 'PXBlue',
    /* Users will see this while the component is loading. */
    notes: {
        markdown: '<div> </div>',
    },
    viewport: {
        viewports: newViewports,
    },
    options: {
        showRoots: true,
    },
    darkMode: {
        // Override the default light theme
        light: { ...pxblueTheme },
        // Override the default dark theme
        dark: { ...pxblueTheme }
    }
});

export const appliedTheme = createMuiTheme(ReactTheme);
export const appliedThemeDark = createMuiTheme(ReactThemeDark);

const getCanvasBackground = () => {
    return useDarkMode() ? Colors.black['A200'] : Colors.gray[50];
};

addDecorator((storyFn) => (
    <MuiThemeProvider theme={useDarkMode() ? appliedThemeDark : appliedTheme}>
        <div className={'wrapper'} style={{ color: Colors.gray['800'], backgroundColor: getCanvasBackground() }}>
            {storyFn()}
        </div>
    </MuiThemeProvider>
));

addDecorator(withKnobs({ escapeHTML: false }));
