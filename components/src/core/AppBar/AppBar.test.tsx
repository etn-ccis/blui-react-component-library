import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AppBar } from './AppBar';
import { AppBar as MuiAppBar } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('AppBar', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render at the correct default sizes', () => {
        // Dynamic
        let appbar = Enzyme.mount(<AppBar />);
        let muiAppbar = appbar.find(MuiAppBar);
        let height = muiAppbar.props().style.height;
        expect(height).toEqual(200);

        // Collapsed
        appbar = Enzyme.mount(<AppBar mode={'collapsed'} />);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(64);

        // Expanded
        appbar = Enzyme.mount(<AppBar mode={'expanded'} />);
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
        appbar = Enzyme.mount(<AppBar mode={'collapsed'} expandedHeight={300} collapsedHeight={100} />);
        muiAppbar = appbar.find(MuiAppBar);
        height = muiAppbar.props().style.height;
        expect(height).toEqual(100);

        // Expanded
        appbar = Enzyme.mount(<AppBar mode={'expanded'} expandedHeight={300} collapsedHeight={100} />);
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
