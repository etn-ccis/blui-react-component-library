import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Spacer } from './Spacer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('Spacer', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer />
            </ThemeProvider>
        );
    });
    it('renders default style properties', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer />
            </ThemeProvider>
        );
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`flex: 1 1 0px`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`height: auto`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`width: auto`);
    });
    it('renders flex 2 style properties', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer flex={2} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`flex: 2 2 0px`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`height: auto`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`width: auto`);
    });
    it('renders flex 3 style properties', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer flex={3} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`flex: 3 3 0px`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`height: auto`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`width: auto`);
    });
    it('renders static properties', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer flex={0} width={250} height={100} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`flex: 0 0 auto`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`height: 100px`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`width: 250px`);
    });
    it('accepts style overrides', () => {
        render(
            <ThemeProvider theme={theme}>
                <Spacer style={{ flex: '3 4 100%', display: 'inline', height: '30%', width: '1rem' }} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`flex: 3 4 100%`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`display: inline`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`height: 30%`);
        expect(screen.getByTestId('spacer-root')).toHaveStyle(`width: 1rem`);
    });
});
