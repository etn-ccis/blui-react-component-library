import React from 'react';
import ReactDOM from 'react-dom';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import * as Colors from '@brightlayer-ui/colors';
import MoreVert from '@mui/icons-material/MoreVert';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { HeroBanner } from '../HeroBanner';
import { findByTestId, getComputedStyleFromHTMLString, mountWithTheme } from '../test-utils';
import { ScoreCard } from './ScoreCard';
import color from 'color';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';

const theme = createTheme(BLUIThemes.blue);
Enzyme.configure({ adapter: new Adapter() });

describe('ScoreCard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <ScoreCard headerTitle={'TestTitle'} />
            </ThemeProvider>,
            div
        );
    });
    it('renders with all text', () => {
        let wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} />, theme);
        expect(wrapper.find(Typography).length).toEqual(1);
        wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} />, theme);
        expect(wrapper.find(Typography).length).toEqual(2);
        wrapper = mountWithTheme(
            <ScoreCard headerTitle={'Test'} headerSubtitle={'TestSub'} headerInfo={'TestInfo'} />,
            theme
        );
        expect(wrapper.find(Typography).length).toEqual(3);
    });
    it('renders with header actions', () => {
        let wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} />, theme);
        expect(wrapper.find(MoreVert).length).toEqual(0);
        wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} actionItems={[<MoreVert key={'icon1'} />]} />, theme);
        expect(findByTestId('action-item', wrapper).length).toEqual(1);
        expect(wrapper.find(MoreVert).length).toEqual(1);
        wrapper = mountWithTheme(
            <ScoreCard
                actionLimit={2}
                headerTitle={'Test'}
                actionItems={[<MoreVert key={'icon1'} />, <MoreVert key={'icon2'} />, <MoreVert key={'icon3'} />]}
            />,
            theme
        );
        expect(findByTestId('action-item', wrapper).length).toEqual(2);
        expect(wrapper.find(MoreVert).length).toEqual(2);
    });
    it('renders correct header text color', () => {
        let wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} />, theme);
        let testedStyle = getComputedStyleFromHTMLString(findByTestId('header', wrapper).html());
        expect(testedStyle.color).toEqual(color(Colors.white['50']).rgb().string());

        wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} headerFontColor={'red'} />, theme);
        testedStyle = getComputedStyleFromHTMLString(wrapper.find(Typography).html());
        expect(testedStyle.color).toEqual('red');
        testedStyle = getComputedStyleFromHTMLString(findByTestId('header', wrapper).html());
        expect(testedStyle.color).toEqual('red');
    });
    it('renders body content', () => {
        let wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} />, theme);
        let content = findByTestId('content', wrapper);
        let body = findByTestId('body-wrapper', wrapper);
        expect(content.children().length).toEqual(1); // body wrapper
        expect(body.children().length).toEqual(0);

        wrapper = mountWithTheme(
            <ScoreCard headerTitle={'Test'}>
                <List />
            </ScoreCard>,
            theme
        );
        content = findByTestId('content', wrapper);
        body = findByTestId('body-wrapper', wrapper);
        expect(content.children().length).toEqual(1);
        expect(body.children(List).length).toEqual(1);
        expect(wrapper.find(List).length).toEqual(1);
    });
    it('renders an action row', () => {
        const wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} actionRow={<List />} />, theme);
        const card = findByTestId('card', wrapper);
        expect(card.children().length).toEqual(4); // header, content, footer (Divider + content)
        expect(wrapper.find(List).length).toEqual(1);
        expect(wrapper.find(Divider).length).toEqual(1);
    });
    it('renders badge content', () => {
        let wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} />, theme);
        const content = findByTestId('content', wrapper);
        const body = findByTestId('body-wrapper', wrapper);
        let badge = findByTestId('badge-wrapper', wrapper);
        expect(content.children().length).toEqual(2); // body wrapper + badge
        expect(body.children().length).toEqual(0); // no body
        expect(badge.children(HeroBanner).length).toEqual(1);
        /* These won't work if we use JSS to style the component
        expect(badge.props().style.marginTop).toEqual(0);
        expect(badge.props().style.alignSelf).toEqual('center');
        */

        wrapper = mountWithTheme(<ScoreCard headerTitle={'Test'} badge={<HeroBanner />} badgeOffset={1} />, theme);
        badge = findByTestId('badge-wrapper', wrapper);
        expect(badge.children(HeroBanner).length).toEqual(1);
        /* These won't work if we use JSS to style the component
        expect(badge.props().style.marginTop).toEqual(1);
        expect(badge.props().style.alignSelf).toEqual('flex-start');
        */
    });
});
