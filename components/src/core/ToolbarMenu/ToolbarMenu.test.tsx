import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import { Mount } from '../types';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ToolbarMenu } from './ToolbarMenu';
import Typography from '@material-ui/core/Typography';
import { act } from 'react-dom/test-utils';
import { createMount } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;

describe('ToolbarMenu', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToolbarMenu label={'label'} />, div);
    });

    it('should render correct label', () => {
        const toolbar = Enzyme.mount(<ToolbarMenu label={'label'} />);
        const typography = toolbar.find(Typography);
        expect(typography.length).toEqual(1);
    });

    it('should open menu when label is clicked', () => {
        const menuItems = [{ title: 'Item 1', onClick: (): void => {}, itemID: 'item1' }];
        const menuGroups = [
            {
                items: menuItems,
            },
        ];
        const onOpen = jest.fn();
        const toolbar = Enzyme.mount(<ToolbarMenu label={'title'} onOpen={onOpen} menuGroups={menuGroups} />);
        const typography = toolbar.find(Typography);
        expect(typography.length).toEqual(1);
        const labelWithDropdownArrow = typography.get(0);
        expect(onOpen).not.toHaveBeenCalled();
        act(() => {
            labelWithDropdownArrow.props.onClick();
        });
        expect(onOpen).toHaveBeenCalled();
    });
});
