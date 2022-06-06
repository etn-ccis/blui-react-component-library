import React from 'react';
import { createRoot } from 'react-dom/client';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Spacer } from './Spacer';
import { getComputedStyleFromHTMLString, mountWithTheme } from '../test-utils';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });

describe('Spacer', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const root = createRoot(div);
        root.render(
            <ThemeProvider theme={theme}>
                <Spacer />
            </ThemeProvider>
        );
    });
    it('renders default properties', () => {
        const wrapper = mountWithTheme(<Spacer />, theme);
        const style = getComputedStyleFromHTMLString(wrapper.find(Spacer).html());
        expect(style.flex).toEqual('1 1 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders flex properties', () => {
        let wrapper = mountWithTheme(<Spacer flex={2} />, theme);
        let style = getComputedStyleFromHTMLString(wrapper.find(Spacer).html());
        expect(style.flex).toEqual('2 2 0px');

        wrapper = mountWithTheme(<Spacer flex={3} />, theme);
        style = getComputedStyleFromHTMLString(wrapper.find(Spacer).html());
        expect(style.flex).toEqual('3 3 0px');
        expect(style.height).toEqual('auto');
        expect(style.width).toEqual('auto');
    });
    it('renders static properties', () => {
        const wrapper = mountWithTheme(<Spacer flex={0} width={250} height={100} />, theme);
        const style = getComputedStyleFromHTMLString(wrapper.find(Spacer).html());
        expect(style.flex).toEqual('0 0 auto');
        expect(style.height).toEqual('100px');
        expect(style.width).toEqual('250px');
    });
    it('accepts style overrides', () => {
        const wrapper = mountWithTheme(
            <Spacer style={{ flex: '3 4 100%', display: 'inline', height: '30%', width: '1rem' }} />,
            theme
        );
        const style = getComputedStyleFromHTMLString(wrapper.find(Spacer).html());
        expect(style.flex).toEqual('3 4 100%');
        expect(style.display).toEqual('inline');
        expect(style.height).toEqual('30%');
        expect(style.width).toEqual('1rem');
    });
});
