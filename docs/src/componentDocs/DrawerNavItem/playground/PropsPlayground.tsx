import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerNavItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavItemComponent);

    return <PlaygroundDrawer drawerData={drawerNavItemJson} />;
};

export default PropsPlayground;
