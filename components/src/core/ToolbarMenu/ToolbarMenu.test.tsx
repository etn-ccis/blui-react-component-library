import React from 'react';
import { createRoot } from 'react-dom/client';
import * as Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ToolbarMenu } from './ToolbarMenu';
import Trend from '@mui/icons-material/TrendingUp';
import { findByTestId, mountWithTheme } from '../test-utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

Enzyme.configure({ adapter: new Adapter() });

describe('ToolbarMenu', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        const root = createRoot(div);
        root.render(
            <ThemeProvider theme={theme}>
                <ToolbarMenu label={'label'} />
            </ThemeProvider>
        );
    });

    it('renders with label', () => {
        const wrapper = mountWithTheme(<ToolbarMenu label={'Subtitle'} data-test={'toolbar-menu'} />, theme);
        expect(findByTestId('label', wrapper).length).toEqual(1);
    });

    it('renders with icon', () => {
        const icon = <Trend data-test={'trend-icon'} />;
        const wrapper = mountWithTheme(
            <ToolbarMenu label={'Subtitle'} icon={icon} data-test={'toolbar-menu'} />,
            theme
        );
        expect(findByTestId('trend-icon', wrapper).length).toEqual(1);
    });
});
