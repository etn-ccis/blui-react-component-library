import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InfoListItem } from './InfoListItem';
// import * as Colors from '@brightlayer-ui/colors';
// import color from 'color';
// import Chevron from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
// import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);

afterEach(cleanup);

describe('InfoListItem', () => {
    it('renders without crashing', () => {
        render(
            <ThemeProvider theme={theme}>
                <InfoListItem title={'test'} />
            </ThemeProvider>
        );
    });

    it('renders with icon', () => {
        render(
            <ThemeProvider theme={theme}>
                <InfoListItem hidePadding icon={<PersonIcon />} title="Test" />
            </ThemeProvider>
        );
        expect(screen.findByRole('icon')).toBeTruthy();
    });

    it('renders correct icon Color', () => {
        render(
            <ThemeProvider theme={theme}>
                {/* <InfoListItem title={'Test'} icon={<PersonIcon />} avatar iconColor={'red'} statusColor={'red'} /> */}
                <InfoListItem
                    title={'Test'}
                    icon={<PersonIcon color={'inherit'} />}
                    avatar
                    iconColor={'red'}
                    statusColor={'red'}
                />
            </ThemeProvider>
        );
        expect(screen.getByTestId('status-stripe')).toHaveStyle(`background-color: red`);
        // expect(screen.getByTestId('PersonIcon')).toHaveStyle(`color: red`);

        // wrapper = mountWithTheme(
        //     <InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} iconColor={'green'} />,
        //     theme
        // );
        // testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        // expect(testedStyle.color).toEqual('green');
        // testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        // expect(testedStyle.backgroundColor).toEqual('red');

        // wrapper = mountWithTheme(
        //     <InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} avatar />,
        //     theme
        // );
        // testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        // expect(testedStyle.color).toEqual(color(Colors.white['50']).rgb().string());
        // expect(testedStyle.backgroundColor).toEqual('red');
        // testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        // expect(testedStyle.backgroundColor).toEqual('red');

        // wrapper = mountWithTheme(
        //     <InfoListItem title={'Test'} icon={<PersonIcon />} statusColor={'red'} iconColor={'blue'} avatar />,
        //     theme
        // );
        // testedStyle = getComputedStyleFromHTMLString(wrapper.find(Avatar).html());
        // expect(testedStyle.color).toEqual('blue');
        // expect(testedStyle.backgroundColor).toEqual('red');
        // testedStyle = getComputedStyleFromHTMLString(findByTestId('status-stripe', wrapper).html());
        // expect(testedStyle.backgroundColor).toEqual('red');
    });

    // it('renders rightComponent', () => {
    //     let wrapper = mountWithTheme(<InfoListItem title="Test" chevron />, theme);
    //     expect(wrapper.find(Chevron).length).toEqual(1);

    //     wrapper = mountWithTheme(<InfoListItem title="Test" />, theme);
    //     expect(wrapper.find(Chevron).length).toEqual(0);

    //     wrapper = mountWithTheme(
    //         <InfoListItem title="Test" onClick={(): void => {}} rightComponent={<PersonIcon />} />,
    //         theme
    //     );
    //     expect(wrapper.find(Chevron).length).toEqual(0);
    //     expect(wrapper.find(PersonIcon).length).toEqual(1);
    // });
    // it('renders leftComponent', () => {
    //     const wrapper = mountWithTheme(<InfoListItem title="Test" leftComponent={<PersonIcon />} />, theme);
    //     expect(wrapper.find(PersonIcon).length).toEqual(1);
    // });
});
