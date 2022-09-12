import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import {
    createProps,
    getIcon,
    getImage,
    hideDefaultPropsFromSnippet,
    removeEmptyLines,
} from '../../../shared/utilities';
import { Accessibility, NotificationsActive, Person, Today } from '@mui/icons-material';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const drawerHeaderJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerHeaderComponent);

    const drawerHeaderProps = createProps(drawerHeaderJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any): string =>
        hideDefaultPropsFromSnippet(drawerHeaderJson, propName, currentValue, 'props');

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer open={true} activeItem={'Identity Management'}>
    <DrawerHeader
        backgroundColor={"${drawerHeaderProps.backgroundColor}"}
        ${toggleDefaultProp('backgroundImage', `${getImage(drawerHeaderProps.backgroundImage)}`)}
        ${toggleDefaultProp('divider', drawerHeaderProps.divider)}
        ${toggleDefaultProp('backgroundOpacity', drawerHeaderProps.backgroundOpacity)}
        fontColor={"${drawerHeaderProps.fontColor}"}
        ${toggleDefaultProp('icon', drawerHeaderProps.icon)}
        subtitle={"${drawerHeaderProps.subtitle}"}
        title={"${drawerHeaderProps.title}"}>
    </DrawerHeader>
    <DrawerBody>
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
</Drawer>`;

        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer open={true} activeItem={'Identity Management'} noLayout sx={{ minHeight: 'auto' }}>
                    <DrawerHeader
                        backgroundColor={drawerHeaderProps.backgroundColor}
                        backgroundImage={getImage(drawerHeaderProps.backgroundImage)}
                        backgroundOpacity={drawerHeaderProps.backgroundOpacity}
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
