import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const toolbarMenuJson = useAppSelector((state: RootState) => state.componentsPropsState.toolbarMenuComponent);

    return <PlaygroundDrawer drawerData={toolbarMenuJson} />;
};

export default PropsPlayground;
