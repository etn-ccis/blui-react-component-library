/* eslint-disable */
import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-components/core/Drawer';
import { createProps, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import { Accessibility, Menu, NotificationsActive, Person, Today } from '@mui/icons-material';
import Box from '@mui/material/Box';

export const PreviewComponent = (): JSX.Element => {
    const spacerJson = useAppSelector((state: RootState) => state.componentsPropsState.spacerComponent);

    const spacerProps = createProps(spacerJson.props as PropsType[]);
    const spacerOtherProps = createProps(spacerJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(spacerJson, propName, currentValue, 'props');

    return <PreviewComponentWithCode previewContent={<h2>Ekta</h2>} code={'ss'} />;
};
