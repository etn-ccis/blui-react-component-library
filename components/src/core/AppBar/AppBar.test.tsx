import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mountWithTheme } from '../test-utils';
import { AppBar } from './AppBar';
import MuiAppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });

describe('AppBar', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <AppBar />
            </ThemeProvider>,
            div
        );
    });

    it('should render at the correct default sizes', () => {
        // Dynamic
        let appbar = mountWithTheme(<AppBar />, theme);
        let muiAppbar = appbar.find(MuiAppBar);
        let height = muiAppbar.props().style.height;
        expect(height).toEqual(200);

        // Collapsed
        appbar = mountWithTheme(<AppBar variant={'collapsed'} />, theme);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual('4rem');

        // Expanded
        appbar = mountWithTheme(<AppBar variant={'expanded'} />, theme);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(200);
    });

    it('should render at the correct custom sizes', () => {
        // Dynamic
        let appbar = mountWithTheme(<AppBar expandedHeight={300} collapsedHeight={100} />, theme);
        let muiAppbar = appbar.find(MuiAppBar);
        let height = muiAppbar.props().style.height;
        expect(height).toEqual(300);

        // Collapsed
        appbar = mountWithTheme(<AppBar variant={'collapsed'} expandedHeight={300} collapsedHeight={100} />, theme);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(100);

        // Expanded
        appbar = mountWithTheme(<AppBar variant={'expanded'} expandedHeight={300} collapsedHeight={100} />, theme);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(300);
    });

    // TESTS FOR CYPRESS
    // 1. should be the correct size on underscroll
    // 1a: underscrolled should be min height
    // 1b. with custom size
    // 2. should be the correect size on overscroll
    // 2a. overscrolled should be max height
    // 2b. with custom size
    // 3. should be the correct size on partial scroll
});
