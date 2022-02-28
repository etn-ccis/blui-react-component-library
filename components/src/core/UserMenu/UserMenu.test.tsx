import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId, mountWithTheme } from '../test-utils';
import { UserMenu } from './UserMenu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });

describe('User Menu', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const avatar = <Avatar />;
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <UserMenu avatar={avatar} />
            </ThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with icon', () => {
        const avatar = (
            <Avatar data-test={'avatar'}>
                <SendIcon data-test={'send-icon'} />
            </Avatar>
        );
        const wrapper = mountWithTheme(<UserMenu avatar={avatar} />, theme);
        expect(findByTestId('send-icon', wrapper).length).toEqual(1);
    });

    it('runs onOpen function when avatar is clicked', () => {
        const onOpen = jest.fn();
        const avatar = (
            <Avatar data-test={'avatar'}>
                <SendIcon />
            </Avatar>
        );
        const wrapper = mountWithTheme(<UserMenu onOpen={onOpen} avatar={avatar} />, theme);
        const renderedAvatar = findByTestId('avatar', wrapper);
        expect(onOpen).not.toHaveBeenCalled();
        renderedAvatar.simulate('click', { currentTarget: 'test' });
        expect(onOpen).toHaveBeenCalled();
    });
});
