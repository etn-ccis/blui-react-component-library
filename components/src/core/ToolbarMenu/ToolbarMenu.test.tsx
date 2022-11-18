import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToolbarMenu } from './ToolbarMenu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import HomeIcon from '@mui/icons-material/Home';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('ToolbarMenu', () => {
    it('should render without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <ToolbarMenu label={'label'} />
            </ThemeProvider>
        );
    });

    it('renders with label', () => {
        render(
            <ThemeProvider theme={theme}>
                <ToolbarMenu label={'Subtitle'} />
            </ThemeProvider>
        );
        expect(screen.getByText('Subtitle')).toBeTruthy;
    });

    it('renders with icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <ToolbarMenu label="My Home" icon={<HomeIcon />} />
            </ThemeProvider>
        );
        expect(screen.findByRole('icon')).toBeTruthy;
    });
    it('renders with menu group items', () => {
        render(
            <ThemeProvider theme={theme}>
                <ToolbarMenu
                    label="My Home"
                    menuGroups={[
                        {
                            items: [{ title: 'London' }, { title: 'New York' }, { title: 'New Haven' }],
                        },
                    ]}
                />
            </ThemeProvider>
        );
        expect(screen.findByText('London')).toBeTruthy;
    });
});
