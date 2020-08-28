import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { createMuiTheme, jssPreset, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { blue as ReactTheme, blueDark as ReactThemeDark } from '@pxblue/react-themes';
import 'typeface-open-sans';
import { pxblueTheme } from '@pxblue/storybook-themes';
import { CssBaseline } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import addons, { useEffect, useState } from '@storybook/addons';
import { DIR_CHANGE_EVENT, getDirection } from '@pxblue/storybook-rtl-addon';
import { useDarkMode } from 'storybook-dark-mode/dist';

const channel = addons.getChannel();

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
pxblueTheme.brandUrl = 'https://pxblue.github.io';

if (window.top.location.hostname === 'localhost') {
    pxblueTheme.brandImage = require('../assets/pxblue-react-alpha.svg');
} else if (window.top.location.pathname.slice(0, 11) === '/react-dev/') {
    pxblueTheme.brandImage = require('../assets/pxblue-react-beta.svg');
} else {
    pxblueTheme.brandImage = require('../assets/pxblue-react.svg');
}

// Only set theme inside storybook canvas.
const themeInit = { dark: pxblueTheme, light: pxblueTheme, current: 'light' };
window.localStorage.setItem('sb-addon-themes-3', JSON.stringify(themeInit));

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
        dark: { ...pxblueTheme },
    },
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const appendDirection = (theme) => Object.assign(theme, { direction: getDirection() });

addDecorator((storyFn) => {
    const [lightTheme, setLightTheme] = useState(createMuiTheme(appendDirection(ReactTheme)));
    const [darkTheme, setDarkTheme] = useState(createMuiTheme(appendDirection(ReactThemeDark)));

    useEffect(() => {
        channel.on(DIR_CHANGE_EVENT, updateDirection);
        return () => channel.off(DIR_CHANGE_EVENT, updateDirection);
    }, [channel]);

    const updateDirection = () => {
        setLightTheme(createMuiTheme(appendDirection(ReactTheme)));
        setDarkTheme(createMuiTheme(appendDirection(ReactThemeDark)));
    };

    return (
        <StylesProvider jss={jss}>
            <MuiThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
                <CssBaseline />
                <div className={'wrapper'}>{storyFn()}</div>
            </MuiThemeProvider>
        </StylesProvider>
    );
});

addDecorator(withKnobs({ escapeHTML: false }));
