import * as React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import PlaygroundDrawer from '../../../shared/PlaygroundDrawer';
import { createProps } from '../../../shared';
import { PropsType } from '../../../__types__';

const PropsPlayground = (): JSX.Element => {
    const appBarJson = useAppSelector((state: RootState) => state.componentsPropsState.appBarComponent);

    return <PlaygroundDrawer drawerData={appBarJson} />;
};

export default PropsPlayground;
