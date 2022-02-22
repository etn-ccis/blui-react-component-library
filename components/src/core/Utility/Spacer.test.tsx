import React from 'react';
import ReactDOM from 'react-dom';
// import { createMount, createShallow } from '@mui/material/test-utils';
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { Mount, Shallow } from '../types';
import { Spacer } from './Spacer';
// import { ThemeProvider } from '@mui/styles';
import { mountWithTheme } from '../test-utils';
import {createTheme, ThemeProvider } from '@mui/material/styles';


// import { createMount, createShallow } from '@mui/material/test-utils';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
const theme = createTheme(BLUIThemes.blue);
Enzyme.configure({ adapter: new Adapter() });
// let mount: Mount;
// let shallow: Shallow;

describe('Spacer', () => {
    beforeEach(() => {
        // mount = createMount({ strict: true });
        // shallow = createShallow({ dive: false });
    });

    afterEach(() => {
        // mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ThemeProvider theme={theme}><Spacer /></ThemeProvider>, div);
    });
    it('renders default properties', () => {
        const wrapper = mountWithTheme(<Spacer />, theme);
        console.log('spacer 37', wrapper);
        console.log('spacer 38', wrapper.props);
        const style = wrapper.props().style;
        expect(style.flex).toEqual('1 1 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders flex properties', () => {
        let wrapper = mountWithTheme(<Spacer flex={2} />, theme);
        console.log('spacer 46', wrapper);
        console.log('spacer 47', wrapper.props);
        let style = wrapper.props().style;
        expect(style.flex).toEqual('2 2 0px');

        wrapper = mountWithTheme(<Spacer flex={3} />, theme);
        style = wrapper.props().style;
        expect(style.flex).toEqual('3 3 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders static properties', () => {
        const wrapper = mountWithTheme(<Spacer flex={0} width={250} height={100} />, theme);
        const style = wrapper.props().style;
        expect(style.flex).toEqual('0 0 auto');
        expect(style.height).toEqual(100);
        expect(style.width).toEqual(250);
    });
    it('accepts style overrides', () => {
        const wrapper = mountWithTheme(
            <Spacer style={{ flex: '3 4 100%', display: 'inline', height: '30%', width: '1rem' }} />, theme
        );
        const style = wrapper.props().style;
        expect(style.flex).toEqual('3 4 100%');
        expect(style.display).toEqual('inline');
        expect(style.height).toEqual('30%');
        expect(style.width).toEqual('1rem');
    });
});
