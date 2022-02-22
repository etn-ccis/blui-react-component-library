import React from 'react';
import ReactDOM from 'react-dom';
import { findByTestId, mountWithTheme } from '../test-utils';
// import { Mount, Shallow } from '../types';
import { EmptyState } from './EmptyState';
import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';

// import { createMount, createShallow } from '@mui/material/test-utils';
import {createTheme, ThemeProvider } from '@mui/material/styles';


// import { createMount, createShallow } from '@mui/material/test-utils';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
const theme = createTheme(BLUIThemes.blue);
Enzyme.configure({ adapter: new Adapter() });
// let mount: Mount;
// let shallow: Shallow;

describe('EmptyState', () => {
    beforeEach(() => {
        // mount = createMount({ strict: true });
        // shallow = createShallow({});
    });

    afterEach(() => {
        // mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <EmptyState
                    icon={<PersonIcon />}
                    title="Test"
                    description="Test Description"
                    actions={<Button> Test </Button>}
                />,
            </ThemeProvider>,
            div
        );
    });

    it('renders with frame class', () => {
        const wrapper = mountWithTheme(<EmptyState icon={<PersonIcon />} title="Test" />, theme);
        expect(findByTestId('frame', wrapper)).toBeTruthy();
    });

    it('renders with icon', () => {
        const wrapper = mountWithTheme(<EmptyState icon={<PersonIcon />} title="Test" />, theme);
        expect(wrapper.find(PersonIcon).length).toEqual(1);
    });

    it('renders with text', () => {
        let wrapper = mountWithTheme(<EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />, theme);
        expect(wrapper.find(Typography).length).toEqual(2);
        wrapper = mountWithTheme(<EmptyState icon={<PersonIcon />} title="Test" />, theme);
        expect(wrapper.find(Typography).length).toEqual(1);
    });

    it('renders with actions', () => {
        let wrapper = mountWithTheme(
            <EmptyState
                icon={<PersonIcon />}
                title="Test"
                description="Test Description"
                actions={<Button> Test </Button>}
            />, theme
        );
        expect(wrapper.find(Button).length).toEqual(1);
        wrapper = mountWithTheme(<EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />, theme);
        expect(wrapper.find(Button).length).toEqual(0);
    });
});
