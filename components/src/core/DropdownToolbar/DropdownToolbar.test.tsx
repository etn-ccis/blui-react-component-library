import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { DropdownToolbar } from './DropdownToolbar';
import { ListItemText, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

describe('DropdownToolbar', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DropdownToolbar title={'title'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render correct title and subtitle', () => {
        const toolbar = Enzyme.mount(<DropdownToolbar title={'title'} subtitle={'Hello'} />);
        const listItemText = toolbar.find(ListItemText);
        expect(listItemText.length).toEqual(1);
        const typography = listItemText.find(Typography);
        expect(typography.length).toEqual(2);
        expect(typography.get(0).props.children).toEqual('title');
        expect(typography.get(1).props.children[0].props.children).toEqual('Hello');
    });

    it('should render navigation icon', () => {
        const icon = <Menu />;
        const toolbar = Enzyme.mount(<DropdownToolbar title={'title'} subtitle={'Hello'} navigationIcon={icon} />);
        expect(toolbar.find(Menu).length).toEqual(1);
    });

    it('should open menu when subtitle is clicked', () => {
        const menuItems = [{ title: 'Item 1', onClick: (): void => {}, itemID: 'item1' }];

        const menuGroups = [
            {
                items: menuItems,
            },
        ];

        const onOpen = jest.fn();
        const toolbar = Enzyme.mount(
            <DropdownToolbar title={'title'} subtitle={'Hello'} onOpen={onOpen} menuGroups={menuGroups} />
        );
        const listItemText = toolbar.find(ListItemText);
        expect(listItemText.length).toEqual(1);
        const typography = listItemText.find(Typography);
        expect(typography.length).toEqual(2);
        const subtitleWithDropdownArrow = typography.get(1);
        expect(onOpen).not.toHaveBeenCalled();
        act(() => {
            subtitleWithDropdownArrow.props.onClick();
        });
        expect(onOpen).toHaveBeenCalled();
    });
});
