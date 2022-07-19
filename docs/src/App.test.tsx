import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, Theme, createTheme, StyledEngineProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { ComponentPreview } from './pages/componentPreview';
import { DrawerContext } from './contexts/drawerContextProvider';

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line
    interface DefaultTheme extends Theme {}
}

test('renders welcome text', () => {
    render(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
                <DrawerContext.Provider
                    value={{
                        drawerOpen: true,
                        setDrawerOpen: jest.fn(),
                    }}
                >
                    <ComponentPreview />
                </DrawerContext.Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
    const bluiText = screen.getByText(/Welcome to Brightlayer/i);
    expect(bluiText).toBeInTheDocument();
});
