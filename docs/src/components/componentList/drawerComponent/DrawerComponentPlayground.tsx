import React from 'react';
import { Box } from '@mui/material';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import {
    Drawer,
    DrawerBody,
    DrawerBodyProps,
    DrawerHeader,
    DrawerHeaderProps,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerProps,
} from '@brightlayer-ui/react-components';
import { componentType, nestedChildrenType } from '../../../data/DrawerTypesNew';

export const DrawerComponentPlayground = (): JSX.Element => {
    const drawerJson = useAppSelector((state: RootState) => state.drawerComponentData.drawerComponent);
    function createProps(drawerJson: componentType[], componentName: string) {
        const component = drawerJson.filter(function (obj: componentType) {
            return obj.componentName === componentName;
        })[0];
        if (component.props) {
            const a = component.props.reduce(
                (acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }),
                {}
            );
            return a;
        } else if (component.nestedChildren) {
            let nestedChildren: any[] = [];

            component.nestedChildren.map((child: nestedChildrenType) => {
                nestedChildren.push(
                    child.nestedChildrenProps.reduce(
                        (acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }),
                        {}
                    ),
                    child.nestedComponets.map((nestedComp: componentType) => {
                        const nestedComponent = nestedComp?.props
                            ? nestedComp.props.reduce(
                                  (acc: any, cur: any) => ({ ...acc, [cur.propName]: cur.currentValue }),
                                  {}
                              )
                            : undefined;
                        return nestedComponent;
                    })
                );
            });
            return nestedChildren;
        }
    }
    const drawerProps: DrawerProps = createProps(drawerJson, 'Drawer');
    const drawerHeaderProps: DrawerHeaderProps = createProps(drawerJson, 'DrawerHeader');
    const drawerBodyProps: DrawerBodyProps = createProps(drawerJson, 'DrawerBody');
    const drawerNavGroupProps = createProps(drawerJson, 'DrawerNavGroup');
    return (
        <Box style={{ width: '300px' }}>
            <Drawer open={drawerProps.open} noLayout={drawerProps.noLayout} variant={drawerProps.variant}>
                <DrawerHeader
                    title={drawerHeaderProps.title}
                    backgroundColor={drawerHeaderProps.backgroundColor}
                    divider={drawerHeaderProps.divider}
                ></DrawerHeader>
                <DrawerBody sx={{ flex: '1 1 auto' }} backgroundColor={drawerBodyProps.backgroundColor}>
                    {drawerNavGroupProps.map((navGroup: any, index: number) => (
                        <DrawerNavGroup
                            key={index}
                            hidePadding={navGroup.hidePadding}
                            titleColor={navGroup.titleColor}
                            titleDivider={navGroup.titleDivider}
                            title={navGroup.title}
                        >
                            {navGroup.length > 0
                                ? navGroup.map((item: any, index: number) => (
                                      <DrawerNavItem
                                          key={index}
                                          itemID={item.itemId}
                                          title={item.title}
                                      ></DrawerNavItem>
                                  ))
                                : undefined}
                        </DrawerNavGroup>
                    ))}
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
