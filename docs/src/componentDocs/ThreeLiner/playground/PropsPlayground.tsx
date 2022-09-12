import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';

const PropsPlayground = (): JSX.Element => {
    const threeLinerJson = useAppSelector((state: RootState) => state.componentsPropsState.threeLinerComponent);

    return <PlaygroundDrawer drawerData={threeLinerJson} />;
};

export default PropsPlayground;
