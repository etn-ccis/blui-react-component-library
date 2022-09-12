import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const appBarJson = useAppSelector((state: RootState) => state.componentsPropsState.appBarComponent);

    return <PlaygroundDrawer drawerData={appBarJson} />;
};

export default PropsPlayground;
