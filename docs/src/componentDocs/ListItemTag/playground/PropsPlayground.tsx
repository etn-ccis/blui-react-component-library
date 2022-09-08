import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const listItemTagJson = useAppSelector((state: RootState) => state.componentsPropsState.listItemTagComponent);

    return <PlaygroundDrawer drawerData={listItemTagJson} />;
};

export default PropsPlayground;
