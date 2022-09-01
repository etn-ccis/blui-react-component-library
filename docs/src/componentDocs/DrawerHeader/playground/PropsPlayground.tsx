import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerHeaderJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerHeaderComponent);

    return <PlaygroundDrawer drawerData={drawerHeaderJson} />;
};

export default PropsPlayground;
