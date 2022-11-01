import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const spacerJson = useAppSelector((state: RootState) => state.componentsPropsState.spacerComponent);

    return <PlaygroundDrawer drawerData={spacerJson} />;
};

export default PropsPlayground;
