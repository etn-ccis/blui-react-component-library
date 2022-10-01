import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const channelValueJson = useAppSelector((state: RootState) => state.componentsPropsState.channelValueComponent);

    return <PlaygroundDrawer drawerData={channelValueJson} />;
};

export default PropsPlayground;
