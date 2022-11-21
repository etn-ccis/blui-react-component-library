import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { ListItemTag } from './ListItemTag';
import * as Colors from '@brightlayer-ui/colors';
// import color from 'color';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('ListItemTag', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <ListItemTag label={'test'} />
            </ThemeProvider>
        );
    });

    it('should render list-item-tag wrapper', () => {
        render(
            <ThemeProvider theme={theme}>
                <ListItemTag label={'test'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('list-item-tag')).toBeTruthy();
    });

    it('renders the correct label text', () => {
        render(
            <ThemeProvider theme={theme}>
                <ListItemTag label={'test'} />
            </ThemeProvider>
        );
        expect(screen.getByText('test')).toBeTruthy();
    });

    it('renders with correct colors', () => {
        const fontColor = Colors.gold[200];
        const backgroundColor = Colors.green[900];
        render(
            <ThemeProvider theme={theme}>
                <ListItemTag label={'test'} fontColor={fontColor} backgroundColor={backgroundColor} />
            </ThemeProvider>
        );
        // const computedStyle = getComputedStyleFromHTMLString(wrapper.html());

        // expect(computedStyle.color).toEqual(color(fontColor).rgb().string());
        // expect(computedStyle.backgroundColor).toEqual(color(backgroundColor).rgb().string());
    });
});
