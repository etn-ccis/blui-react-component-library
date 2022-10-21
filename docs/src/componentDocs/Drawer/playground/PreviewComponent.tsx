import React, { useRef } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import { PropsType } from '../../../__types__';
import * as Colors from '@brightlayer-ui/colors';
import Typography from '@mui/material/Typography';
import { Devices, AirportShuttle, Menu, Dashboard, Toc, Close } from '@mui/icons-material';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { updateComponentProp } from '../../../redux/componentsPropsState';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.componentsPropsState.drawerComponent);
    const dispatch = useAppDispatch();
    const containerRef = useRef(null);

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
    };

    const drawerProps = createProps(drawerJson.props as PropsType[]);
    const drawerSharedProps = createProps(drawerJson.sharedProps as PropsType[]);
    const variantIsTemporary = drawerProps.variant === 'temporary';
    const variantIsPersistent = drawerProps.variant === 'persistent';
    const variantIsPermanent = drawerProps.variant === 'permanent';
    const variantIsRail = drawerProps.variant === 'rail';

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

    const toggleOpenProp = (open: boolean): string => `updateOpenProp(${open ? `false` : `true`})`;

    const updateHeaderAsPerVariant = (): string => {
        if (variantIsTemporary) {
            return `
    <DrawerHeader
        title="Title"
        icon={<Close />}
        onClick={(): void => ${toggleOpenProp(drawerProps.open)}}
        sx={{ cursor: 'pointer' }}
    />
        `;
        } else if (variantIsPersistent) {
            return `
    <DrawerHeader
        title="Title"
        icon={<Menu />}
        onClick={(): void => ${toggleOpenProp(drawerProps.open)}}
        sx={{ cursor: 'pointer' }}
    />
            `;
        } else if (variantIsPermanent) {
            return `
    <DrawerHeader
        title="Title"
    />
            `;
        }
        return ``;
    };

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
    open={${drawerProps.open}}
    ${toggleDefaultProp('openOnHover', drawerProps.openOnHover, 'props')}
    ${toggleDefaultProp('openOnHoverDelay', drawerProps.openOnHoverDelay, 'props')}
    ${toggleDefaultProp('ripple', drawerSharedProps.ripple, 'sharedProps')}
    ${toggleDefaultProp('sideBorder', drawerProps.sideBorder, 'props')}
    ${toggleDefaultProp('variant', drawerProps.variant, 'props')}
    ${toggleDefaultProp('width', drawerProps.width, 'props')}
>
${updateHeaderAsPerVariant()}
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
</Drawer>`;
        return removeEmptyLines(jsx);
    };
    return (
        <PreviewComponentWithCode
            previewContent={
                <Box
                    sx={{
                        m: '16px 0',
                        backgroundColor: Colors.white[600],
                        minHeight: 250,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                    ref={containerRef}
                >
                    <Drawer
                        open={drawerProps.open}
                        width={drawerProps.width}
                        variant={drawerProps.variant}
                        {...(variantIsTemporary && { disablePortal: true })}
                        noLayout
                        SlideProps={{
                            container: containerRef.current,
                        }}
                        BackdropProps={{
                            sx: { position: 'absolute' },
                        }}
                        sx={{
                            position: 'absolute',
                            minWidth: '100%',
                            '& .MuiPaper-root': {
                                background: 'transparent',
                                width: variantIsPersistent ? 'inherit' : 'initial',
                            },
                            '& .BluiDrawer-content': { backgroundColor: 'background.paper' },
                        }}
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
                        openOnHover={drawerProps.openOnHover}
                        openOnHoverDelay={drawerProps.openOnHoverDelay}
                        ripple={drawerSharedProps.ripple}
                        sideBorder={drawerProps.sideBorder}
                    >
                        {variantIsTemporary && (
                            <DrawerHeader
                                title="Title"
                                icon={<Close />}
                                onClick={(): void => updateOpenProp(!drawerProps.open)}
                                sx={{ cursor: 'pointer' }}
                            />
                        )}

                        {variantIsPersistent && (
                            <DrawerHeader
                                title="Title"
                                icon={<Menu />}
                                onClick={(): void => updateOpenProp(!drawerProps.open)}
                                sx={{ cursor: 'pointer' }}
                            />
                        )}

                        {variantIsPermanent && <DrawerHeader title="Title" />}

                        <DrawerBody>
                            <DrawerNavGroup items={navGroupItems}></DrawerNavGroup>
                        </DrawerBody>
                    </Drawer>
                    <Box
                        sx={{
                            backgroundColor: 'background.paper',
                            height: 350,
                            width: `calc(100vw - 850px)`,
                            maxWidth: 700,
                        }}
                    >
                        {variantIsRail ? (
                            <Box sx={{ p: 2, ml: 9 }}>App Content Here.</Box>
                        ) : (
                            <>
                                <AppBar position="static">
                                    <Toolbar>
                                        <IconButton
                                            size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 2 }}
                                            onClick={(): void => updateOpenProp(!drawerProps.open)}
                                        >
                                            <Menu />
                                        </IconButton>
                                        <Typography variant="h6">Toolbar</Typography>
                                    </Toolbar>
                                </AppBar>
                                <Box
                                    sx={{
                                        p: 2,
                                        ml: drawerProps.open
                                            ? variantIsTemporary
                                                ? 1
                                                : `${drawerProps.width}px`
                                            : variantIsPersistent
                                            ? 7
                                            : 1,
                                    }}
                                >
                                    App Content Here.
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            }
            code={generateCodeSnippet()}
        />
    );
};
