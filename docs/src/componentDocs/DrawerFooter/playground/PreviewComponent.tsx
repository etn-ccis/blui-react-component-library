import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerFooter,
} from '@brightlayer-ui/react-components';
import { createProps, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import Box from '@mui/material/Box';
import Menu from '@mui/icons-material/Menu';

export const PreviewComponent = (): JSX.Element => {
    const drawerFooterJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerFooterComponent);

    const drawerFooterProps = createProps(drawerFooterJson.props as PropsType[]);
    const drawerFooterOtherProps = createProps(drawerFooterJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerFooterJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={${drawerFooterOtherProps.open}}>
    <DrawerHeader
        icon={<Menu />}
        title={'Header Title'}
    />

    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem
                hidePadding
                itemID={'Nav Item'}
                title={'Nav Item'}
            />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter
        backgroundColor="${drawerFooterProps.backgroundColor}"
        ${toggleDefaultProp('divider', drawerFooterProps.divider)}
        ${toggleDefaultProp('hideContentOnCollapse', drawerFooterProps.hideContentOnCollapse)}
    >
        <Box sx={{p: 2}}>
            Footer Content Here
        </Box>
    </DrawerFooter>
</Drawer>`;

        return removeEmptyLines(jsx);
    };
    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={drawerFooterOtherProps.open} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerHeader icon={<Menu />} title={'Header Title'} />

                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerNavItem hidePadding itemID={'Nav Item'} title={'Nav Item'} />
                        </DrawerNavGroup>
                    </DrawerBody>
                    <DrawerFooter
                        backgroundColor={drawerFooterProps.backgroundColor}
                        divider={drawerFooterProps.divider}
                        hideContentOnCollapse={drawerFooterProps.hideContentOnCollapse}
                    >
                        <Box sx={{ p: 2 }}>Footer Content Here</Box>
                    </DrawerFooter>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
