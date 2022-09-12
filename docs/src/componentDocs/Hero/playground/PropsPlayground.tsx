import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const heroJson = useAppSelector((state: RootState) => state.componentsPropsState.heroComponent);

    return <PlaygroundDrawer drawerData={heroJson} />;
};

export default PropsPlayground;
