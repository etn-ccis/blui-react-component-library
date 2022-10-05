import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
} from '@brightlayer-ui/react-components';
import { PropsType } from '../../../__types__';
import EatonFooterLogoLight from '../../../assets/EatonLogoLight.png';
import * as Colors from '@brightlayer-ui/colors';
import Typography from '@mui/material/Typography';
import { Devices, AirportShuttle, Menu, Dashboard, Toc } from '@mui/icons-material';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { updateComponentProp } from '../../../redux/componentsPropsState';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerComponent);
    const dispatch = useAppDispatch();

    const updateActiveItem = (activeItem: string): void => {
        const newState = {
            propName: 'activeItem',
            propValue: activeItem,
            componentName: drawerJson.componentName as string,
            groupType: 'props',
        };
        dispatch(updateComponentProp(newState));
    };

    const updateOpenProp = (open: boolean): void => {
        const newState = {
            propName: 'open',
            propValue: open,
            componentName: drawerJson.componentName as string,
            groupType: 'props',
        };
        dispatch(updateComponentProp(newState));
        setTimeout((): void => {
            dispatch(
                updateComponentProp({
                    propName: 'variant',
                    propValue: 'permanent',
                    componentName: drawerJson.componentName as string,
                    groupType: 'props',
                })
            );
        }, 500);
    };

    const drawerProps = createProps(drawerJson.props as PropsType[]);
    const drawerSharedProps = createProps(drawerJson.sharedProps as PropsType[]);

    const navGroupItems: NavItem[] = [
        {
            icon: <Dashboard />,
            itemID: 'Overview',
            title: 'Overview',
            onClick: (): void => updateActiveItem('Overview'),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onClick: (): void => updateActiveItem('Monthly Report'),
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onClick: (): void => updateActiveItem('Annual Report'),
                },
            ],
        },
        {
            icon: <Toc />,
            itemID: 'Timeline',
            title: 'Timeline',
            onClick: (): void => updateActiveItem('Timeline'),
        },
        {
            icon: <Devices />,
            title: 'Devices',
            itemID: 'Devices',
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => updateActiveItem('Devices'),
        },
        {
            icon: <AirportShuttle />,
            itemID: 'Schedule',
            title: 'Schedule',
            onClick: (): void => updateActiveItem('Schedule'),
        },
    ];

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(drawerJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<Drawer
    activeItem={"${drawerProps.activeItem}"}
    ${toggleDefaultProp('activeItemBackgroundColor', drawerSharedProps.activeItemBackgroundColor, 'sharedProps')}
    ${toggleDefaultProp('activeItemFontColor', drawerSharedProps.activeItemFontColor, 'sharedProps')}
    ${toggleDefaultProp('activeItemIconColor', drawerSharedProps.activeItemIconColor, 'sharedProps')}
    ${toggleDefaultProp('activeItemBackgroundShape', drawerSharedProps.activeItemBackgroundShape, 'sharedProps')}
    ${toggleDefaultProp('chevron', drawerSharedProps.chevron, 'sharedProps')}
    ${toggleDefaultProp('chevronColor', drawerSharedProps.chevronColor, 'sharedProps')}
    ${toggleDefaultProp('collapseIcon', drawerSharedProps.collapseIcon, 'sharedProps')}
    ${toggleDefaultProp('condensed', drawerProps.condensed, 'props')}
    ${toggleDefaultProp(
        'disableActiveItemParentStyles',
        drawerSharedProps.disableActiveItemParentStyles,
        'sharedProps'
    )}
    ${toggleDefaultProp('divider', drawerSharedProps.divider, 'sharedProps')}
    ${toggleDefaultProp('expandIcon', drawerSharedProps.expandIcon, 'sharedProps')}
    ${toggleDefaultProp('hidePadding', drawerSharedProps.hidePadding, 'sharedProps')}
    ${toggleDefaultProp('itemFontColor', drawerSharedProps.itemFontColor, 'sharedProps')}
    ${toggleDefaultProp('itemIconColor', drawerSharedProps.itemIconColor, 'sharedProps')}
    ${toggleDefaultProp('nestedBackgroundColor', drawerSharedProps.nestedBackgroundColor, 'sharedProps')}
    ${toggleDefaultProp('nestedDivider', drawerSharedProps.nestedDivider, 'sharedProps')}
    ${toggleDefaultProp('noLayout', drawerProps.noLayout)}
    open={${drawerProps.open}}
    ${toggleDefaultProp('openOnHover', drawerProps.openOnHover, 'props')}
    ${toggleDefaultProp('openOnHoverDelay', drawerProps.openOnHoverDelay, 'props')}
    ${toggleDefaultProp('ripple', drawerSharedProps.ripple, 'sharedProps')}
    ${toggleDefaultProp('sideBorder', drawerProps.sideBorder, 'props')}
    ${toggleDefaultProp('variant', drawerProps.variant, 'props')}
    ${toggleDefaultProp('width', drawerProps.width, 'props')}
>
    <DrawerHeader
        backgroundColor={Colors.blue[500]}
        divider={false}
        fontColor={Colors.white[50]}
        icon={<Menu />}
        subtitle={"Organize your menu items here"}
        title={"Brightlayer UI Drawer"}
    />
    <DrawerBody>
        <DrawerNavGroup items={
            [
                {
                    icon: <Dashboard />,
                    itemID: "Overview",
                    title: "Overview",
                    onClick:(): void => updateActiveItem("Overview"),
                    items: [
                        {
                            itemID: "Monthly Report",
                            title: "Monthly Report",
                            onClick: (): void => updateActiveItem("Monthly Report"),
                        },
                        {
                            itemID: "Annual Report",
                            title: "Annual Report",
                            onClick: (): void => updateActiveItem("Annual Report"),
                        },
                    ],
                },
                {
                    icon: <Toc />,
                    itemID: "Timeline",
                    title: "Timeline",
                    onClick:(): void => updateActiveItem("Timeline"),
                },
                {
                    icon: <Devices />,
                    title: "Devices",
                    itemID: "Devices",
                    subtitle: "5 new warnings",
                    statusColor: Colors.yellow[500],
                    onClick:(): void => updateActiveItem("Devices"),
                },
                {
                    icon: <AirportShuttle />,
                    itemID: "Schedule",
                    title: "Schedule",
                    onClick:(): void => updateActiveItem("Schedule"),
                }
            ]
        }>
            
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter backgroundColor={Colors.white[50]}>
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: 16,
            }}
        >
            <img src={"../../../assets/EatonLogoLight.png"} alt="Eaton Logo" height={28} width={"auto"} />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography
                    variant={"caption"}
                >{"Copyright \u00A9 Eaton ${new Date().getFullYear()}"}</Typography>
                <Typography variant={"caption"}>All Rights Reserved</Typography>
            </div>
        </div>
    </DrawerFooter>
</Drawer>`;
        return removeEmptyLines(jsx);
    };
    return (
        <PreviewComponentWithCode
            previewContent={
                <Drawer
                    activeItem={drawerProps.activeItem}
                    activeItemBackgroundColor={drawerSharedProps.activeItemBackgroundColor}
                    activeItemFontColor={drawerSharedProps.activeItemFontColor}
                    activeItemIconColor={drawerSharedProps.activeItemIconColor}
                    activeItemBackgroundShape={drawerSharedProps.activeItemBackgroundShape}
                    chevron={drawerSharedProps.chevron}
                    chevronColor={drawerSharedProps.chevronColor}
                    collapseIcon={getIcon(drawerSharedProps.collapseIcon)}
                    condensed={drawerProps.condensed}
                    disableActiveItemParentStyles={drawerSharedProps.disableActiveItemParentStyles}
                    divider={drawerSharedProps.divider}
                    expandIcon={getIcon(drawerSharedProps.expandIcon)}
                    hidePadding={drawerSharedProps.hidePadding}
                    itemFontColor={drawerSharedProps.itemFontColor}
                    itemIconColor={drawerSharedProps.itemIconColor}
                    nestedBackgroundColor={drawerSharedProps.nestedBackgroundColor}
                    nestedDivider={drawerSharedProps.nestedDivider}
                    noLayout={drawerProps.noLayout}
                    open={drawerProps.open}
                    openOnHover={drawerProps.openOnHover}
                    openOnHoverDelay={drawerProps.openOnHoverDelay}
                    ripple={drawerSharedProps.ripple}
                    sideBorder={drawerProps.sideBorder}
                    variant={drawerProps.variant}
                    width={drawerProps.width}
                    sx={{ minHeight: 'auto' }}
                    ModalProps={{
                        onBackdropClick: (): void => {
                            updateOpenProp(false);
                        },
                    }}
                >
                    <DrawerHeader
                        backgroundColor={Colors.blue[500]}
                        divider={false}
                        fontColor={Colors.white[50]}
                        icon={<Menu />}
                        subtitle={'Drawer Component'}
                        title={'Brightlayer UI'}
                    />
                    <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={'transparent'}>
                        <DrawerNavGroup items={navGroupItems}></DrawerNavGroup>
                    </DrawerBody>
                    <DrawerFooter backgroundColor={Colors.white[50]}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                p: 2,
                            }}
                        >
                            <img src={EatonFooterLogoLight} alt="Eaton Logo" height={28} width={'auto'} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography
                                    variant={'caption'}
                                >{`Copyright \u00A9 Eaton ${new Date().getFullYear()}`}</Typography>
                                <Typography variant={'caption'}>All Rights Reserved</Typography>
                            </Box>
                        </Box>
                    </DrawerFooter>
                </Drawer>
            }
            code={generateCodeSnippet()}
        />
    );
};
