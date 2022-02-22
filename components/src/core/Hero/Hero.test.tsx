import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId, mountWithTheme } from '../test-utils';
// import { Mount, Shallow } from '../types';
import { Hero } from './Hero';
import { ChannelValue } from '../ChannelValue';
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { createMount, createShallow } from '@mui/material/test-utils';
import {createTheme, ThemeProvider } from '@mui/material/styles';


// import { createMount, createShallow } from '@mui/material/test-utils';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });
// let mount: Mount;
// let shallow: Shallow;

describe('Hero', () => {
    beforeEach(() => {
        // mount = createMount({ strict: true });
        // shallow = createShallow();
    });

    afterEach(() => {
        // mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ThemeProvider theme={theme}><Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} /></ThemeProvider>, div);
    });
    it('should render with the wrapper class', () => {
        const wrapper = mountWithTheme(<Hero value={1} label={'test'} icon={'a'} />, theme);
        expect(findByTestId('wrapper', wrapper)).toBeTruthy();
    });
    it('renders without children', () => {
        const wrapper = mountWithTheme(<Hero value={1} label={'test'} icon={'a'} />, theme);
        expect(wrapper.find(ChannelValue).length).toEqual(1);
    });
    it('renders with children', () => {
        const wrapper = mountWithTheme(
            <Hero value={1} label={'test'} icon={'a'}>
                <ChannelValue value={1} />
                <ChannelValue value={1} />
            </Hero>, theme
        );
        expect(wrapper.find(ChannelValue).length).toEqual(2);
    });
});
