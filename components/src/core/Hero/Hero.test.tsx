import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId, mountWithTheme } from '../test-utils';
import { Hero } from './Hero';
import { ChannelValue } from '../ChannelValue';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });
describe('Hero', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
            </ThemeProvider>,
            div
        );
    });
    it('should render with the wrapper class', () => {
        const wrapper = mountWithTheme(<Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'} />, theme);
        expect(findByTestId('wrapper', wrapper)).toBeTruthy();
    });
    it('renders without children', () => {
        const wrapper = mountWithTheme(<Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'} />, theme);
        expect(wrapper.find(ChannelValue).length).toEqual(1);
    });
    it('renders with children', () => {
        const wrapper = mountWithTheme(
            <Hero ChannelValueProps={{ value: '1' }} label={'test'} icon={'a'}>
                <ChannelValue value={1} />
                <ChannelValue value={1} />
            </Hero>,
            theme
        );
        expect(wrapper.find(ChannelValue).length).toEqual(2);
    });
});
