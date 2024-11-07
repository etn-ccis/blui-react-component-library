import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListItemTag } from './ListItemTag';
import * as Colors from '@brightlayer-ui/colors';
import { ThemeProvider } from '@mui/material/styles';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';

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
        expect(screen.getByTestId('blui-list-item-tag')).toBeTruthy();
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
        expect(screen.getByTestId('blui-list-item-tag')).toBeTruthy();
        expect(screen.getByTestId('blui-list-item-tag')).toHaveStyle(`color: rgb(248, 213, 143)`);
        expect(screen.getByTestId('blui-list-item-tag')).toHaveStyle(`background-color: rgb(23, 142, 11)`);
    });
});
