/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
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

export const PreviewComponent = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);

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

    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerOtherProps = createOtherProps(drawerJson, 'Drawer');

    const jsx = `
    <Drawer
                activeItem="${drawerProps.activeItem}"
                activeItemBackgroundColor="${drawerOtherProps.activeItemBackgroundColor}"
                activeItemFontColor="${drawerOtherProps.activeItemFontColor}"
                activeItemIconColor="${drawerOtherProps.activeItemIconColor}"
                activeItemBackgroundShape="${drawerOtherProps.activeItemBackgroundShape}"
                chevron="${drawerOtherProps.chevron}"
                chevronColor="${drawerOtherProps.chevronColor}"
                // collapseIcon={drawerOtherProps.collapseIcon}
                condensed="${drawerProps.condensed}"
                divider="${drawerOtherProps.divider}"
                // expandIcon={drawerOtherProps.expandIcon}
                hidePadding="${drawerOtherProps.hidePadding}"
                itemFontColor="${drawerOtherProps.itemFontColor}"
                itemIconColor="${drawerOtherProps.itemIconColor}"
                nestedBackgroundColor="${drawerOtherProps.nestedBackgroundColor}"
                nestedDivider="${drawerOtherProps.nestedDivider}"
                noLayout="${drawerProps.noLayout}"
                open="${drawerProps.open}"
                openOnHover="${drawerProps.openOnHover}"
                openOnHoverDelay="${drawerProps.openOnHoverDelay}"
                ripple="${drawerProps.ripple}"
                sideBorder="${drawerProps.sideBorder}"
                variant="${drawerProps.variant}"
                width="${drawerProps.width}"
            >
                    <DrawerHeader
                        backgroundColor={Colors.blue[500]}
                        divider={false}
                        fontColor={Colors.white[50]}
                        icon={<Menu />}
                        subtitle={'Organize your menu items here'}
                        title={'Brightlayer UI Drawer'}
                    ></DrawerHeader>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup title={'NavGroup 1'} titleColor={Colors.black[500]} titleDivider={true}>
                            <DrawerNavItem icon={<Toc />} itemID={'Timeline'} title={'Timeline'} />
                            <DrawerNavItem icon={<PinDrop />} itemID={'Locations'} title={'Locations'} />
                            <DrawerNavItem
                                icon={<Devices />}
                                title={'Devices'}
                                itemID={'Devices'}
                                subtitle={'5 new warnings'}
                                statusColor={Colors.yellow[500]}
                            />
                        </DrawerNavGroup>
                        <DrawerNavGroup title={'NavGroup 2'} titleColor={Colors.black[500]} titleDivider={true}>
                            <DrawerNavItem icon={<MoveToInbox />} itemID={'User Guide'} title={'User Guide'} />
                            <DrawerNavItem
                                icon={<Send />}
                                itemID={'License Agreement'}
                                title={'License Agreement'}
                                subtitle={'For Eaton employees only'}
                            />
                            <DrawerNavItem icon={<Accessibility />} itemID={'Accessibility'} title={'Accessibility'}>
                                <DrawerNavItem itemID={'Color Contrast Guide'} title={'Color Contrast Guide'} />
                                <DrawerNavItem itemID={'Screen Reader'} title={'Screen Reader'} />
                            </DrawerNavItem>
                            <DrawerNavItem
                                icon={<NotificationsActive />}
                                title={'Notifications'}
                                itemID={'Notifications'}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                    <DrawerFooter backgroundColor={Colors.white[50]}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                padding: 16,
                            }}
                        >
                            <img src={EatonFooterLogoLight} alt="Eaton Logo" height={28} width={'auto'} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography
                                    variant={'caption'}
                                >{'Copyright \u00A9 Eaton ${new Date().getFullYear()}'}</Typography>
                                <Typography variant={'caption'}>All Rights Reserved</Typography>
                            </div>
                        </div>
                    </DrawerFooter>
                </Drawer>
    `;

    return (
        <>
            <Box style={{ width: '300px' }}>
                <Drawer
                    activeItem={drawerProps.activeItem}
                    activeItemBackgroundColor={drawerOtherProps.activeItemBackgroundColor}
                    activeItemFontColor={drawerOtherProps.activeItemFontColor}
                    activeItemIconColor={drawerOtherProps.activeItemIconColor}
                    activeItemBackgroundShape={drawerOtherProps.activeItemBackgroundShape}
                    chevron={drawerOtherProps.chevron}
                    chevronColor={drawerOtherProps.chevronColor}
                    // collapseIcon={drawerOtherProps.collapseIcon}
                    condensed={drawerProps.condensed}
                    divider={drawerOtherProps.divider}
                    // expandIcon={drawerOtherProps.expandIcon}
                    hidePadding={drawerOtherProps.hidePadding}
                    itemFontColor={drawerOtherProps.itemFontColor}
                    itemIconColor={drawerOtherProps.itemIconColor}
                    nestedBackgroundColor={drawerOtherProps.nestedBackgroundColor}
                    nestedDivider={drawerOtherProps.nestedDivider}
                    noLayout={drawerProps.noLayout}
                    open={drawerProps.open}
                    openOnHover={drawerProps.openOnHover}
                    openOnHoverDelay={drawerProps.openOnHoverDelay}
                    ripple={drawerProps.ripple}
                    sideBorder={drawerProps.sideBorder}
                    variant={drawerProps.variant}
                    width={drawerProps.width}
                >
                    <DrawerHeader
                        backgroundColor={Colors.blue[500]}
                        divider={false}
                        fontColor={Colors.white[50]}
                        icon={<Menu />}
                        subtitle={'Organize your menu items here'}
                        title={'Brightlayer UI Drawer'}
                    ></DrawerHeader>
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup title={'NavGroup 1'} titleColor={Colors.black[500]} titleDivider={true}>
                            <DrawerNavItem icon={<Toc />} itemID={'Timeline'} title={'Timeline'} />
                            <DrawerNavItem icon={<PinDrop />} itemID={'Locations'} title={'Locations'} />
                            <DrawerNavItem
                                icon={<Devices />}
                                title={'Devices'}
                                itemID={'Devices'}
                                subtitle={'5 new warnings'}
                                statusColor={Colors.yellow[500]}
                            />
                        </DrawerNavGroup>
                        <DrawerNavGroup title={'NavGroup 2'} titleColor={Colors.black[500]} titleDivider={true}>
                            <DrawerNavItem icon={<MoveToInbox />} itemID={'User Guide'} title={'User Guide'} />
                            <DrawerNavItem
                                icon={<Send />}
                                itemID={'License Agreement'}
                                title={'License Agreement'}
                                subtitle={'For Eaton employees only'}
                            />
                            <DrawerNavItem icon={<Accessibility />} itemID={'Accessibility'} title={'Accessibility'}>
                                <DrawerNavItem itemID={'Color Contrast Guide'} title={'Color Contrast Guide'} />
                                <DrawerNavItem itemID={'Screen Reader'} title={'Screen Reader'} />
                            </DrawerNavItem>
                            <DrawerNavItem
                                icon={<NotificationsActive />}
                                title={'Notifications'}
                                itemID={'Notifications'}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                    <DrawerFooter backgroundColor={Colors.white[50]}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                padding: 16,
                            }}
                        >
                            <img src={EatonFooterLogoLight} alt="Eaton Logo" height={28} width={'auto'} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography
                                    variant={'caption'}
                                >{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                                <Typography variant={'caption'}>All Rights Reserved</Typography>
                            </div>
                        </div>
                    </DrawerFooter>
                </Drawer>
            </Box>
            <CodeBlock code={jsx} language="jsx" />
        </>
    );
};
