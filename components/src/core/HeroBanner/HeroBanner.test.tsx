import React from 'react';
import ReactDOM from 'react-dom';
import { HeroBanner } from './HeroBanner';
import { Hero } from '../Hero';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { mountWithTheme } from '../test-utils';

const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });

describe('HeroBanner', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <HeroBanner />,
            </ThemeProvider>,
            div
        );
    });
    it('renders only 4 children', () => {
        const hero = mountWithTheme(
            <HeroBanner>
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
            </HeroBanner>,
            theme
        );
        expect(hero.find(Hero).length).toEqual(4);
    });
});
