import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import { Mount } from '../types';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createMount } from '@material-ui/core/test-utils';
import { AppBar } from './AppBar';
import MuiAppBar from '@material-ui/core/AppBar';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;

describe('AppBar', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppBar />, div);
    });

    it('should render at the correct default sizes', () => {
        // Dynamic
        let appbar = Enzyme.mount(<AppBar />);
        let muiAppbar = appbar.find(MuiAppBar);
        let height = muiAppbar.props().style.height;
        expect(height).toEqual(200);

        // Collapsed
        appbar = Enzyme.mount(<AppBar variant={'collapsed'} />);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual('4rem');

        // Expanded
        appbar = Enzyme.mount(<AppBar variant={'expanded'} />);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(200);
    });

    it('should render at the correct custom sizes', () => {
        // Dynamic
        let appbar = Enzyme.mount(<AppBar expandedHeight={300} collapsedHeight={100} />);
        let muiAppbar = appbar.find(MuiAppBar);
        let height = muiAppbar.props().style.height;
        expect(height).toEqual(300);

        // Collapsed
        appbar = Enzyme.mount(<AppBar variant={'collapsed'} expandedHeight={300} collapsedHeight={100} />);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(100);

        // Expanded
        appbar = Enzyme.mount(<AppBar variant={'expanded'} expandedHeight={300} collapsedHeight={100} />);
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
