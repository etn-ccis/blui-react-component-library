import React from 'react';
import * as ReactDOM from 'react-dom';
import { findByTestId, mountWithTheme } from '../test-utils';
import { ChannelValue } from './ChannelValue';
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Menu from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
const theme = createTheme(BLUIThemes.blue);
Enzyme.configure({ adapter: new Adapter() });

describe('ChannelValue', () => {
    beforeEach(() => {
        
    });

    afterEach(() => {
        // mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ThemeProvider theme={theme}><ChannelValue value={'test'} /></ThemeProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('should render with the wrapper class', () => {
        const wrapper = mountWithTheme(<ChannelValue value={1} />, theme);
        expect(findByTestId('wrapper', wrapper)).toBeTruthy();
        wrapper.unmount();
    });
    it('should render value properly', () => {
        const wrapper = mountWithTheme(<ChannelValue value={1} />, theme);
        expect(findByTestId('value', wrapper).length).toEqual(1);
        wrapper.unmount();
    });
    it('should render icon properly', () => {
        let wrapper = mountWithTheme(<ChannelValue icon={<Menu />} value={1} />, theme);
        expect(findByTestId('icon', wrapper).length).toEqual(1);
        wrapper = mountWithTheme(<ChannelValue value={1} />, theme);
        expect(findByTestId('icon', wrapper).length).toEqual(0);
        wrapper.unmount();
    });
    it('should render units properly', () => {
        let wrapper = mountWithTheme(<ChannelValue value={1} units={'X'} />, theme);
        expect(findByTestId('units', wrapper).length).toEqual(1);
        wrapper = mountWithTheme(<ChannelValue value={1} />, theme);
        expect(findByTestId('units', wrapper).length).toEqual(0);
        wrapper.unmount();
    });
});
