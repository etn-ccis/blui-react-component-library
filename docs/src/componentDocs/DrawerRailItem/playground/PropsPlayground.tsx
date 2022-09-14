import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerRailItemJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerRailItemComponent);

    return <PlaygroundDrawer drawerData={drawerRailItemJson} />;
};

export default PropsPlayground;
