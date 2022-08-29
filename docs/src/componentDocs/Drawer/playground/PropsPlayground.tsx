import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerComponent);

    return <PlaygroundDrawer drawerData={drawerJson} />;
};

export default PropsPlayground;
