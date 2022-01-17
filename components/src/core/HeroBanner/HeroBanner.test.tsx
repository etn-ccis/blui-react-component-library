import React from 'react';
import ReactDOM from 'react-dom';
import { HeroBanner } from './HeroBanner';
import { Hero } from '../Hero';
import Enzyme from 'enzyme';
import { Mount } from '../types';
// import Adapter from 'enzyme-adapter-react-16';
import { createMount } from '@material-ui/core/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;

describe('HeroBanner', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeroBanner />, div);
    });
    it('renders only 4 children', () => {
        const hero = mount(
            <HeroBanner>
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
                <Hero icon={'A'} label={'Healthy'} ChannelValueProps={{ value: '96', units: '/100' }} />
            </HeroBanner>
        );
        expect(hero.find(Hero).length).toEqual(4);
    });
});
