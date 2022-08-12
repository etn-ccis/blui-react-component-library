import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { PLAYGROUND_DRAWER_WIDTH } from '../constants';

type Anchor = 'right';
type DrawerProps = {
    drawerContent: JSX.Element;
};
const PlaygroundDrawer = (props: DrawerProps): JSX.Element => {
    const { drawerContent: DrawerContent } = props;
    const [state, setState] = React.useState({
        right: true,
    });
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <div>
            <React.Fragment key={'right'}>
                <Drawer
                    PaperProps={{
                        sx: {
                            top: '112px',
                            width: PLAYGROUND_DRAWER_WIDTH,
                            paddingBottom: '112px',
                        },
                    }}
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    variant={'persistent'}
                >
                    {DrawerContent}
                </Drawer>
            </React.Fragment>
        </div>
    );
};

export default PlaygroundDrawer;
