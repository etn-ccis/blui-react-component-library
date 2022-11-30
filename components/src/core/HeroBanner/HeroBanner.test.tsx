import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroBanner } from './HeroBanner';
import { Hero } from '../Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('HeroBanner', () => {
    test('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <HeroBanner />,
            </ThemeProvider>
        );
    });
    it('renders only 4 children', () => {
        render(
            <ThemeProvider theme={theme}>
                <HeroBanner>
                    <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                    <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                    <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                    <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                    <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                </HeroBanner>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-hero-banner-root')).toBeTruthy();
        expect(screen.queryAllByTestId('blui-hero-root')).toBeTruthy();
        expect(screen.queryAllByTestId('blui-channel-value-value')).toHaveLength(4);
        expect(screen.queryAllByTestId('blui-channel-value-units')).toHaveLength(4);
    });
});
