/* eslint-disable @typescript-eslint/restrict-template-expressions @typescript-eslint/no-unused-vars */
import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    DrawerHeader,
    DrawerProps,
} from '@brightlayer-ui/react-components';
import { ComponentType, PropsType } from '../../../__types__';
import EatonFooterLogoLight from '../../../assets/EatonLogoLight.png';
import * as Colors from '@brightlayer-ui/colors';
import Typography from '@mui/material/Typography';
import {
    Accessibility,
    Devices,
    PinDrop,
    Menu,
    MoveToInbox,
    Send,
    Toc,
    NotificationsActive,
} from '@mui/icons-material';
import { CodeBlock } from '../../../shared/CodeBlock';
import { getIcon } from '../../../shared/utilities';

export const PreviewComponent = (): JSX.Element => {
    const drawerHeaderJson = useAppSelector((state: RootState) => state.drawerHeaderComponentData.drawerHeaderComponent);

    const iterateComponentProps = (props: PropsType[]): any => {
        const componentProps = props?.reduce(
            (acc: any, cur: any) => ({
                ...acc,
                [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
            }),
            {}
        );
        return componentProps;
    };

    const createProps = (drawerProps: ComponentType[], componentName: string): any => {
        const component = drawerProps.filter((obj: ComponentType) => obj.componentName === componentName)[0];
        return iterateComponentProps(component?.props as PropsType[]);
    };

    const createOtherProps = (drawerOtherProps: ComponentType[], componentName: string): any => {
        const component = drawerOtherProps.filter((obj: ComponentType) => obj.componentName === componentName)[0];
        return iterateComponentProps(component?.otherProps as PropsType[]);
    };

    const drawerProps: DrawerProps = createProps(drawerHeaderJson, 'DrawerHeader');

    const jsx = `hello`;

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <DrawerHeader
                        backgroundColor={Colors.blue[500]}
                        divider={false}
                        fontColor={Colors.white[50]}
                        icon={<Menu />}
                        subtitle={'Organize your menu items here'}
                        title={'Brightlayer UI Drawer'}
                    />
                </Box>
                <Box
                    sx={{
                        overflow: 'auto',
                        boxSizing: 'border-box',
                        pt: 1,
                    }}
                >
                    <CodeBlock code={jsx} language="jsx" />
                </Box>
            </Box>
        </>
    );
};
