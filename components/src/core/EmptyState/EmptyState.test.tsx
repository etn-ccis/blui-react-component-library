import React from 'react';
import { createRoot } from 'react-dom/client';
import { findByTestId, mountWithTheme } from '../test-utils';
import { EmptyState } from './EmptyState';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);
Enzyme.configure({ adapter: new Adapter() });

describe('EmptyState', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const root = createRoot(div);
        root.render(
            <ThemeProvider theme={theme}>
                <EmptyState
                    icon={<PersonIcon />}
                    title="Test"
                    description="Test Description"
                    actions={<Button> Test </Button>}
                />
                ,
            </ThemeProvider>
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
        let wrapper = mountWithTheme(
            <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />,
            theme
        );
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
            />,
            theme
        );
        expect(wrapper.find(Button).length).toEqual(1);
        wrapper = mountWithTheme(
            <EmptyState icon={<PersonIcon />} title="Test" description="Test Description" />,
            theme
        );
        expect(wrapper.find(Button).length).toEqual(0);
    });
});
