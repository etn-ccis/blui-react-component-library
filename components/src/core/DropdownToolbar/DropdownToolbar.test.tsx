import React from 'react';
import * as ReactDOM from 'react-dom';
import { Mount, Shallow } from '../types';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import { DropdownToolbar } from './DropdownToolbar';

Enzyme.configure({ adapter: new Adapter() });

let shallow: Shallow;
let mount: Mount;

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
});

