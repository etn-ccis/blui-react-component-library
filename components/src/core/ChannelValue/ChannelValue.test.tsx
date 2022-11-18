import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { ChannelValue } from './ChannelValue';
import Menu from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('ChannelValue', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <ChannelValue value={'test'} />
            </ThemeProvider>
        );
        expect(screen.getByText('test')).toBeTruthy;
    });
    it('should render with the wrapper class', () => {
        render(
            <ThemeProvider theme={theme}>
                <ChannelValue value={1} />
            </ThemeProvider>
        );
        expect(screen.getByText('1')).toBeTruthy;
    });
    it('should render value properly', () => {
        render(
            <ThemeProvider theme={theme}>
                <ChannelValue value={1} />
            </ThemeProvider>
        );
        expect(screen.getByText('1')).toBeTruthy;
    });
    it('should render icon properly', () => {
        render(
            <ThemeProvider theme={theme}>
                <ChannelValue icon={<Menu />} value={1} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('MenuIcon')).toBeTruthy;
        expect(screen.getByText('1')).toBeTruthy;
    });
    it('should render units properly', () => {
        render(
            <ThemeProvider theme={theme}>
                <ChannelValue value={1} units={'X'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('units')).toBeTruthy;
        expect(screen.getByText('1')).toBeTruthy;
    });
});
