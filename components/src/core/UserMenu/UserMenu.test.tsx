import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserMenu } from './UserMenu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('User Menu', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <UserMenu avatar={<Avatar>AV</Avatar>} />
            </ThemeProvider>
        );
    });

    it('renders with icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <Avatar>
                    <SendIcon />
                </Avatar>
            </ThemeProvider>
        );
        expect(screen.getByTestId('SendIcon')).toBeTruthy;
    });

    it('runs onOpen function when avatar is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <UserMenu
                    avatar={<Avatar>MH</Avatar>}
                    menuGroups={[
                        {
                            items: [
                                {
                                    title: 'Settings',
                                    icon: <SendIcon />,
                                },
                            ],
                        },
                    ]}
                    menuTitle="Sample Title"
                    menuSubtitle="Sample Subtitle"
                />
            </ThemeProvider>
        );
        const onOpen = jest.fn();
        const renderedAvatar = screen.getByText('MH');
        fireEvent.click(renderedAvatar);
        expect(onOpen).toHaveBeenCalled;
        expect(screen.getByText('Settings')).toBeTruthy;
    });
});
