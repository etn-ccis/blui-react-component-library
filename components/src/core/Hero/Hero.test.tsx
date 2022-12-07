import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Hero } from './Hero';
import { ChannelValue } from '../ChannelValue';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('Hero', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
            </ThemeProvider>
        );
    });
    it('should render with the wrapper class', () => {
        render(
            <ThemeProvider theme={theme}>
                <Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-hero-root')).toBeTruthy();
    });
    it('renders without children', () => {
        render(
            <ThemeProvider theme={theme}>
                <Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'} />
            </ThemeProvider>
        );
        expect(screen.getByText('1')).toBeTruthy();
        expect(screen.getByText('test')).toBeTruthy();
    });
    it('renders with children', () => {
        render(
            <ThemeProvider theme={theme}>
                <Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'}>
                    <ChannelValue value={1} />
                    <ChannelValue value={1} />
                </Hero>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-hero-root')).toBeTruthy();
        expect(screen.queryAllByTestId('blui-channel-value-value')).toBeTruthy();
        expect(screen.getByText('test')).toBeTruthy();
        expect(screen.findByRole('icon')).toBeTruthy();
    });
});
