import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerNavGroupJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerNavGroupComponent);

    return <PlaygroundDrawer drawerData={drawerNavGroupJson} />;
};

export default PropsPlayground;
