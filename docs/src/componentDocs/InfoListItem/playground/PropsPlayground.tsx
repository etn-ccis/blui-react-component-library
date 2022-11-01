import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const infoListItemJson = useAppSelector((state: RootState) => state.componentsPropsState.infoListItemComponent);

    return <PlaygroundDrawer drawerData={infoListItemJson} />;
};

export default PropsPlayground;
