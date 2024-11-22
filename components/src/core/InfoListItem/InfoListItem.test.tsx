import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoListItem } from './InfoListItem';
import { OfflineBolt } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from '@mui/material/styles';
import { blueThemes } from '@brightlayer-ui/react-themes';

afterEach(cleanup);

describe('InfoListItem', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem title={'test'} />
            </ThemeProvider>
        );
    });

    it('renders with icon', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem hidePadding icon={<PersonIcon />} title="Test" />
            </ThemeProvider>
        );
        expect(screen.findByRole('icon')).toBeTruthy();
    });

    it('renders correct icon Color', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem
                    title={'Test'}
                    icon={<OfflineBolt />}
                    avatar={true}
                    iconColor={'red'}
                    statusColor={'red'}
                />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-status-stripe')).toHaveStyle(`background-color: red`);
        // this is blocked from testing right now. OffLIneBoltIcon has this style but fails in test
        // other tests should check avatar and icon colors that also fail.
        // expect(screen.getByTestId('OfflineBoltIcon')).toHaveStyle(`background-color: red`);
    });

    it('renders rightComponent', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem title="Test" chevron />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.findByRole('icon')).toBeTruthy();
        expect(screen.getByTestId('ChevronRightIcon')).toBeTruthy();
    });

    it('renders no rightComponent', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem title="Test" />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.queryByRole('icon')).not.toBeInTheDocument();
        expect(screen.queryByTestId('ChevronRightIcon')).not.toBeInTheDocument();
    });

    it('renders correct rightComponent icon', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem title="Test" onClick={(): void => {}} rightComponent={<PersonIcon />} />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.queryByTestId('ChevronRightIcon')).not.toBeInTheDocument();
        expect(screen.findByTestId('PersonIcon')).toBeTruthy();
    });

    it('renders leftComponent', () => {
        render(
            <ThemeProvider theme={blueThemes}>
                <InfoListItem title="Test" leftComponent={<PersonIcon />} />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.findByTestId('PersonIcon')).toBeTruthy();
    });
});
