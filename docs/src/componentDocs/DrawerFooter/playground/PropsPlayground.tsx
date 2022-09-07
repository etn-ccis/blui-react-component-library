import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerFooterJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerFooterComponent);

    return <PlaygroundDrawer drawerData={drawerFooterJson} />;
};

export default PropsPlayground;
