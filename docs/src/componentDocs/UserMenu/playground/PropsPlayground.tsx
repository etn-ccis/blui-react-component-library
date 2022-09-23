import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const userMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.userMenuComponent);

    return <PlaygroundDrawer drawerData={userMenuJson} />;
};

export default PropsPlayground;
