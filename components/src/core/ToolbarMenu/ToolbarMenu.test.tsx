import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import { Mount, Shallow } from '../types';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ToolbarMenu } from './ToolbarMenu';
import { act } from 'react-dom/test-utils';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import Trend from '@material-ui/icons/TrendingUp';
import { findByTestId } from '../test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

fdescribe('ToolbarMenu', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: false });
    });

    afterEach(() => {
        mount.cleanUp();
    });
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToolbarMenu label={'label'} />, div);
    });

    // it('should render correct label', () => {
    //     const toolbar = Enzyme.mount(<ToolbarMenu label={'label'} />);
    //     const typography = toolbar.find(Typography);
    //     expect(typography.length).toEqual(1);
    // });

    // it('renders with icon', () => {
    //     const avatar = (
    //         <Avatar data-test={'avatar'}>
    //             <SendIcon data-test={'send-icon'} />
    //         </Avatar>
    //     );
    //     const wrapper = shallow(<UserMenu avatar={avatar} />);
    //     expect(findByTestId('send-icon', wrapper).length).toEqual(1);
    // });

    it('renders with label', () => {
        const wrapper = shallow(<ToolbarMenu label={'Subtitle'} data-test={'toolbar-menu'} />);
        expect(findByTestId('toolbar-menu', wrapper).length).toEqual(1);
    });

    it('renders with icon', () => {
        const icon = <Trend data-test={'trend-icon'} />;
        const wrapper = shallow(<ToolbarMenu label={'Subtitle'} icon={icon} data-test={'toolbar-menu'} />);
        expect(findByTestId('trend-icon', wrapper).length).toEqual(1);
    });

    it('runs onOpen function when toolbarMenu is clicked', () => {
        const onOpen = jest.fn();
        const icon = <Trend />;
        const wrapper = shallow(<ToolbarMenu label={'Subtitle'} icon={icon} data-test={'toolbar-menu'} />);
        const toolbarMenu = findByTestId('wrapper', wrapper);
        expect(onOpen).not.toHaveBeenCalled();
        act(() => {
            toolbarMenu.props.onClick();
        });
        expect(onOpen).toHaveBeenCalled();
    });

    // it('should open menu when label is clicked', () => {
    //     const menuItems = [{ title: 'Item 1', onClick: (): void => {}, itemID: 'item1' }];
    //     const menuGroups = [
    //         {
    //             items: menuItems,
    //         },
    //     ];
    //     const onOpen = jest.fn();
    //     const toolbar = Enzyme.mount(<ToolbarMenu label={'title'} onOpen={onOpen} menuGroups={menuGroups} />);
    //     const typography = toolbar.find(Typography);
    //     expect(typography.length).toEqual(1);
    //     const labelWithDropdownArrow = typography.get(0);
    //     expect(onOpen).not.toHaveBeenCalled();
    //     act(() => {
    //         labelWithDropdownArrow.props.onClick();
    //     });
    //     expect(onOpen).toHaveBeenCalled();
    // });
});
