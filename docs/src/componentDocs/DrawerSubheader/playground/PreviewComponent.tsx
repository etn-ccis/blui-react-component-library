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
    const drawerSubheaderJson = useAppSelector(
        (state: RootState) => state.componentsPropsState.drawerSubheaderComponent
    );

    const drawerSubheaderProps = createProps(drawerSubheaderJson.props as PropsType[]);
    const drawerSubheaderOtherProps = createProps(drawerSubheaderJson.otherProps as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerSubheaderJson, propName, currentValue, 'props');

    const generateSubHeaderSnippet = (): string => {
        if (drawerSubheaderProps.divider && drawerSubheaderProps.hideContentOnCollapse) {
            return `<DrawerSubheader>`;
        }
        return `<DrawerSubheader 
        ${toggleDefaultProp('divider', drawerSubheaderProps.divider)}
        ${toggleDefaultProp('hideContentOnCollapse', drawerSubheaderProps.hideContentOnCollapse)}
    >`;
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={${drawerSubheaderOtherProps.open}}>
    <DrawerHeader 
        icon={<Menu />}
        title={'Subheader Demo'}
        subtitle={'See the DrawerSubheader below'} 
    />
    ${generateSubHeaderSnippet()}
        <Box
            sx={{
                p: 2,
            }}
        >
            Subheader Content Here
        </Box>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem
                icon={<Person />}
                itemID={'Identity Management'}
                title={'Identity Management'}
            />
            <DrawerNavItem
                icon={<Today />}
                itemID={'Calendar'}
                title={'Calendar'} />
            <DrawerNavItem 
                icon={<Accessibility />}
                title={'Accessibility'}
                itemID={'Accessibility'} />
            <DrawerNavItem
                icon={<NotificationsActive />}
                title={'Notifications'}
                itemID={'Notifications'}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={drawerSubheaderOtherProps.open} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerHeader icon={<Menu />} title={'Subheader Demo'} subtitle={'See the DrawerSubheader below'} />
                    <DrawerSubheader
                        hideContentOnCollapse={drawerSubheaderProps.hideContentOnCollapse}
                        divider={drawerSubheaderProps.divider}
                    >
                        <Box
                            sx={{
                                p: 2,
                            }}
                        >
                            Subheader Content Here
                        </Box>
                    </DrawerSubheader>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup>
                            <DrawerNavItem
                                icon={<Person />}
                                itemID={'Identity Management'}
                                title={'Identity Management'}
                            />
                            <DrawerNavItem icon={<Today />} itemID={'Calendar'} title={'Calendar'} />
                            <DrawerNavItem icon={<Accessibility />} title={'Accessibility'} itemID={'Accessibility'} />
                            <DrawerNavItem
                                icon={<NotificationsActive />}
                                title={'Notifications'}
                                itemID={'Notifications'}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
