import React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import { Mount, Shallow } from '../types';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ToolbarMenu } from './ToolbarMenu';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import Trend from '@material-ui/icons/TrendingUp';
import { findByTestId } from '../test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: Mount;
let shallow: Shallow;

describe('ToolbarMenu', () => {
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

    it('renders with label', () => {
        const wrapper = shallow(<ToolbarMenu label={'Subtitle'} data-test={'toolbar-menu'} />);
        expect(findByTestId('label', wrapper).length).toEqual(1);
    });

    it('renders with icon', () => {
        const icon = <Trend data-test={'trend-icon'} />;
        const wrapper = shallow(<ToolbarMenu label={'Subtitle'} icon={icon} data-test={'toolbar-menu'} />);
        expect(findByTestId('trend-icon', wrapper).length).toEqual(1);
    });
});
