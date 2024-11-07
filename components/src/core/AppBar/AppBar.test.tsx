import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppBar } from './AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import Typography from '@mui/material/Typography';

afterEach(cleanup);

describe('AppBar', () => {
    it('should render without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <AppBar />
            </ThemeProvider>
        );
    });

    it('should render Typography title', () => {
        render(
            <ThemeProvider theme={theme}>
                <AppBar>
                    <Typography variant="h6">AppBar</Typography>
                </AppBar>
            </ThemeProvider>
        );
        const divElement = screen.getByText(/AppBar/i);
        expect(divElement).toBeTruthy();
    });

    it('should render at the correct default size', () => {
        render(
            <ThemeProvider theme={theme}>
                <AppBar variant="snap"></AppBar>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-appbar-root')).toHaveStyle(`height: 200px`);
    });

    it('should render at the correct collapsed height size', () => {
        render(
            <ThemeProvider theme={theme}>
                <AppBar variant="collapsed"></AppBar>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-appbar-root')).toHaveStyle(`height: 4rem`);
    });

    it('should render at the correct expanded height size', () => {
        render(
            <ThemeProvider theme={theme}>
                <AppBar variant="expanded"></AppBar>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-appbar-root')).toHaveStyle(`height: 200px`);
    });
});
