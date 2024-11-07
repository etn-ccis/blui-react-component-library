import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EmptyState } from './EmptyState';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from '@mui/material/styles';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';

afterEach(cleanup);

describe('EmptyState', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <EmptyState
                    icon={<PersonIcon />}
                    title="Test"
                    description="Test Description"
                    actions={<Button> Test </Button>}
                />
                ,
            </ThemeProvider>
        );
    });

    it('renders root empty state', () => {
        render(
            <ThemeProvider theme={theme}>
                <EmptyState icon={<PersonIcon />} title="Test" />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-empty-state-root')).toBeTruthy();
    });

    it('renders with icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <EmptyState icon={<PersonIcon />} title="Test" />
            </ThemeProvider>
        );
        expect(screen.getByTestId('PersonIcon')).toBeTruthy();
    });

    it('renders with text', () => {
        render(
            <ThemeProvider theme={theme}>
                <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('Test Description')).toBeTruthy();
    });

    it('renders with actions', () => {
        render(
            <ThemeProvider theme={theme}>
                <EmptyState
                    icon={<PersonIcon />}
                    title="Test"
                    description="Test Description"
                    actions={<Button> Test </Button>}
                />
            </ThemeProvider>
        );
        expect(screen.getByRole('button', { name: /test/i })).toBeTruthy();
    });
});
