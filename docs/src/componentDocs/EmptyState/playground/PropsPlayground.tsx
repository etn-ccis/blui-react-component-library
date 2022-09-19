import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const emptyStateJson = useAppSelector((state: RootState) => state.componentsPropsState.emptyStateComponent);

    return <PlaygroundDrawer drawerData={emptyStateJson} />;
};

export default PropsPlayground;