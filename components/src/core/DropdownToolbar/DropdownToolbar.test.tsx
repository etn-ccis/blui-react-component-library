import React from 'react';
import * as ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import { DropdownToolbar } from './DropdownToolbar';
import { ListItemText, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

Enzyme.configure({ adapter: new Adapter() });

let mount: Mount;
let shallow: Shallow;

describe('DropdownToolbar', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({});
    });

    afterEach(() => {
        mount.cleanUp();
    });

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
});
