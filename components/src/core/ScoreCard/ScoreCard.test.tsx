import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as Colors from '@brightlayer-ui/colors';
import MoreVert from '@mui/icons-material/MoreVert';
import { HeroBanner } from '../HeroBanner';
import { ScoreCard } from './ScoreCard';
import { ThemeProvider } from '@mui/material/styles';
import { blueThemes as theme } from '@brightlayer-ui/react-themes';
import { Hero } from '../Hero';

afterEach(cleanup);

describe('ScoreCard', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'TestTitle'} />
            </ThemeProvider>
        );
    });
    it('renders title and subtitle', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('TestSub')).toBeTruthy();
    });
    it('renders title subtitle and info', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} headerInfo={'TestInfo'} />
            </ThemeProvider>
        );
        expect(screen.getByText('Test')).toBeTruthy();
        expect(screen.getByText('TestSub')).toBeTruthy();
        expect(screen.getByText('TestInfo')).toBeTruthy();
    });
    it('renders with header actions', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} actionItems={[<MoreVert key={'icon1'} />]} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-action-item')).toBeTruthy();
        expect(screen.findByRole('icon')).toBeTruthy();

        render(
            <ThemeProvider theme={theme}>
                <ScoreCard
                    actionLimit={2}
                    headerTitle={'Test'}
                    actionItems={[<MoreVert key={'icon1'} />, <MoreVert key={'icon2'} />, <MoreVert key={'icon3'} />]}
                />
            </ThemeProvider>
        );
        expect(screen.getAllByTestId('blui-action-item')).toHaveLength(3);
        // need to test 2 actionItems (actionLimit) are visible when 3 are in dom
    });
    it('renders correct header text color', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-score-card-header')).toHaveStyle(`color: #ffffff`);
    });
    it('renders correct header text color when changed', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} headerFontColor={'red'} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-score-card-header')).toHaveStyle(`color: red`);
    });
    it('renders body content', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'}>
                    <List>
                        <ListItem>
                            <ListItemText primary="Body Content" />
                        </ListItem>
                    </List>
                </ScoreCard>
            </ThemeProvider>
        );
        expect(screen.getByText('Body Content')).toBeTruthy();
    });
    it('renders an action row', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} actionRow={<List title="View Location" />} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-body-content')).toBeTruthy();
        expect(screen.getByTestId('blui-score-card-root')).toBeTruthy();
        expect(screen.getByRole('heading')).toBeTruthy();
        expect(screen.getByRole('separator')).toBeTruthy();
        expect(screen.getByRole('list')).toBeTruthy();
    });
    it('renders badge content', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'Test'} badge={<HeroBanner />} />
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-body-content')).toBeTruthy();
        expect(screen.getByTestId('blui-body-wrapper')).toBeTruthy();
        expect(screen.getByTestId('blui-badge-wrapper')).toBeTruthy();
    });
    it('renders badge with offset', () => {
        render(
            <ThemeProvider theme={theme}>
                <ScoreCard
                    headerTitle="Substation 3"
                    headerSubtitle="High Humidity Alarm"
                    headerInfo="4 Devices"
                    badge={
                        <HeroBanner>
                            <Hero
                                icon={<MoreVert fontSize="inherit" />}
                                label="Grade"
                                iconSize={72}
                                iconBackgroundColor={Colors.white[50]}
                                ChannelValueProps={{ value: '98', units: '/100', unitSpace: 'hide' }}
                            />
                        </HeroBanner>
                    }
                    badgeOffset={-54}
                >
                    <List>
                        <ListItem>
                            <ListItemText primary="Body Content" />
                        </ListItem>
                    </List>
                </ScoreCard>
            </ThemeProvider>
        );
        expect(screen.getByTestId('blui-badge-wrapper')).toHaveStyle(`margin-top: -54px`);
    });
});
