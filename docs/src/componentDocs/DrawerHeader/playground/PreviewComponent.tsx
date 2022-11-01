import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import {
    createProps,
    getIcon,
    getIconWithProp,
    getImage,
    hideDefaultPropsFromSnippet,
    removeEmptyLines,
} from '../../../shared/utilities';
import { Accessibility, NotificationsActive, Person, Today } from '@mui/icons-material';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';
import useTheme from '@mui/material/styles/useTheme';

export const PreviewComponent = (): JSX.Element => {
    const theme = useTheme();
    const drawerHeaderJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerHeaderComponent);

    const drawerHeaderProps = createProps(drawerHeaderJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, themeDefaultValue?: string | number): string =>
        hideDefaultPropsFromSnippet(drawerHeaderJson, propName, currentValue, 'props', themeDefaultValue);

    const toggleIconProp = (icon: string): string => {
        if (icon === 'undefined') {
            return toggleDefaultProp('icon', icon);
        }
        return `icon={${getIconWithProp(icon, {})}}`;
    };

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true}>
    <DrawerHeader
        ${toggleDefaultProp('backgroundColor', drawerHeaderProps.backgroundColor, theme.palette.primary.main)}
        ${toggleDefaultProp('backgroundImage', `${getImage(drawerHeaderProps.backgroundImage)}`)}
        ${toggleDefaultProp('divider', drawerHeaderProps.divider)}
        ${toggleDefaultProp('backgroundOpacity', drawerHeaderProps.backgroundOpacity)}
        ${toggleDefaultProp('fontColor', drawerHeaderProps.fontColor)}
        ${toggleIconProp(drawerHeaderProps.icon)}
        ${toggleDefaultProp('subtitle', drawerHeaderProps.subtitle)}
        ${toggleDefaultProp('title', drawerHeaderProps.title)}
    >
    </DrawerHeader>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem
                icon={<Person />}
                itemID={"Identity Management"}
                title={"Identity Management"}
            />
            <DrawerNavItem icon={<Today />} itemID={"Calendar"} title={"Calendar"} />
            <DrawerNavItem icon={<Accessibility />} title={"Accessibility"} itemID={"Accessibility"} />
            <DrawerNavItem
                icon={<NotificationsActive />}
                title={"Notifications"}
                itemID={"Notifications"}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerHeader
                        backgroundColor={drawerHeaderProps.backgroundColor}
                        backgroundImage={getImage(drawerHeaderProps.backgroundImage)}
                        backgroundOpacity={drawerHeaderProps.backgroundOpacity || undefined}
                        divider={drawerHeaderProps.divider}
                        fontColor={drawerHeaderProps.fontColor}
                        icon={getIcon(drawerHeaderProps.icon)}
                        subtitle={drawerHeaderProps.subtitle}
                        title={drawerHeaderProps.title}
                    />

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
