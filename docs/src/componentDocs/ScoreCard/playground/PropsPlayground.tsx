import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const scoreCardJson = useAppSelector((state: RootState) => state.componentsPropsState.scoreCardComponent);

    return <PlaygroundDrawer drawerData={scoreCardJson} />;
};

export default PropsPlayground;
