import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThreeLiner } from './ThreeLiner';
import { ThemeProvider } from '@mui/material/styles';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import { ToolbarMenu } from '../ToolbarMenu';

afterEach(cleanup);

describe('Three liner', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <ThreeLiner />
            </ThemeProvider>
        );
    });
    it('renders with all props', () => {
        render(
            <ThemeProvider theme={theme}>
                <ThreeLiner title="title" subtitle="subtitle" info="info" />
            </ThemeProvider>
        );
        expect(screen.getByText('title')).toBeTruthy();
        expect(screen.getByText('subtitle')).toBeTruthy();
        expect(screen.getByText('info')).toBeTruthy();
    });
    it('renders with custom content', () => {
        render(
            <ThemeProvider theme={theme}>
                <ThreeLiner
                    title="title"
                    subtitle="subtitle"
                    info={
                        <ToolbarMenu
                            label="info"
                            menuGroups={[
                                {
                                    items: [
                                        {
                                            title: 'Menu Item 1',
                                        },
                                        {
                                            title: 'Menu Item 2',
                                        },
                                        {
                                            title: 'Menu Item 3',
                                        },
                                    ],
                                },
                            ]}
                        />
                    }
                />
            </ThemeProvider>
        );
    });
});
