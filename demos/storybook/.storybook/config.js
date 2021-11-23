import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { createTheme, jssPreset, MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { blue as ReactTheme, blueDark as ReactThemeDark } from '@brightlayer-ui/react-themes';
import 'typeface-open-sans';
import { bluiTheme } from '@brightlayer-ui/storybook-themes';
import { CssBaseline } from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import addons, { useEffect, useState } from '@storybook/addons';
import { DIR_CHANGE_EVENT, getDirection } from '@brightlayer-ui/storybook-rtl-addon';
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

bluiTheme.brandTitle = 'Brightlayer UI React Component Library';
bluiTheme.brandUrl = 'https://brightlayer-ui.github.io';

if (window.top.location.hostname === 'localhost') {
    bluiTheme.brandImage = require('../assets/brightlayer-ui-react-alpha.svg');
} else if (window.top.location.pathname.slice(0, 11) === '/react-dev/') {
    bluiTheme.brandImage = require('../assets/brightlayer-ui-react-beta.svg');
} else {
    bluiTheme.brandImage = require('../assets/brightlayer-ui-react.svg');
}

// Only set theme inside storybook canvas.
const themeInit = { dark: bluiTheme, light: bluiTheme, current: 'light' };
window.localStorage.setItem('sb-addon-themes-3', JSON.stringify(themeInit));

addParameters({
    name: 'BLUI',
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
        light: { ...bluiTheme },
        // Override the default dark theme
        dark: { ...bluiTheme },
    },
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const appendDirection = (theme) => Object.assign(theme, { direction: getDirection() });

addDecorator((storyFn) => {
    const [lightTheme, setLightTheme] = useState(createTheme(appendDirection(ReactTheme)));
    const [darkTheme, setDarkTheme] = useState(createTheme(appendDirection(ReactThemeDark)));

    useEffect(() => {
        channel.on(DIR_CHANGE_EVENT, updateDirection);
        return () => channel.off(DIR_CHANGE_EVENT, updateDirection);
    }, [channel]);

    const updateDirection = () => {
        setLightTheme(createTheme(appendDirection(ReactTheme)));
        setDarkTheme(createTheme(appendDirection(ReactThemeDark)));
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
