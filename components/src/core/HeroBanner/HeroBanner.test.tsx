import React from 'react';
import ReactDOM from 'react-dom';
import { HeroBanner } from './HeroBanner';
import { Hero } from '../Hero';
import Enzyme from 'enzyme';
import { Mount } from '../types';
// import Adapter from 'enzyme-adapter-react-16';
// import { createMount } from '@mui/material/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createTheme, ThemeProvider } from '@mui/material/styles';


// import { createMount, createShallow } from '@mui/material/test-utils';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import { mountWithTheme } from '../test-utils';
const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });
// let mount: Mount;

describe('HeroBanner', () => {
    beforeEach(() => {
        // mount = createMount({ strict: true });
    });

    afterEach(() => {
        // mount.cleanUp();
    });
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ThemeProvider theme={theme}><HeroBanner />,</ThemeProvider>, div);
    });
    it('renders only 4 children', () => {
        const hero = mountWithTheme(
            <HeroBanner>
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
                <Hero icon={'A'} label={'Healthy'} value={96} units={'/100'} />
            </HeroBanner>,
            theme
        );
        expect(hero.find(Hero).length).toEqual(4);
    });
});
