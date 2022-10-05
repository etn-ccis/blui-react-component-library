import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import {
    pageDefinitions,
    SimpleNavItem,
    SimpleGroupNavGroupItem,
} from '../__configuration__/navigationMenu/navigation';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Menu from '@mui/icons-material/Menu';
import { DRAWER_WIDTH } from '../shared';
import AvatarSvg from '../assets/react_logo.svg';

const backgroundImage = require('../assets/cubes_tile.png');
const linearGradientOverlayImage = `linear-gradient(to right, rgba(0, 123, 193, 1) 22.4%, rgba(0, 123, 193, 0.2) 100%), url(${backgroundImage})`;
const tabs = ['examples', 'api-docs', 'playground'];
export const NavigationDrawer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [tabPath, setTabPath] = useState(tabs);

    const createNavItems = useCallback(
        (navData: SimpleNavItem[], parentUrl: string, depth: number): NavItem[] => {
            const convertedItems: NavItem[] = [];
            for (let i = 0; i < navData.length; i++) {
                const item = navData[i];
                const fullURL = `${parentUrl}${item.url || ''}`;
                convertedItems.push({
                    title: item.title,
                    icon: depth === 0 ? item.icon : undefined,
                    itemID: fullURL,
                    hidePadding: depth > 0 ? false : true,
                    onClick: item.component
                        ? (): void => {
                              navigate(fullURL);
                          }
                        : undefined,
                    items: item.pages
                        ? createNavItems(item.pages, `${parentUrl}${item.url || ''}`, depth + 1)
                        : undefined,
                });
            }
            return convertedItems;
        },
        [navigate]
    );

    const createNavGroupItems = useCallback(
        (navData: SimpleGroupNavGroupItem[]) => {
            const convertedGroupItems = [];
            for (let i = 0; i < navData.length; i++) {
                const item = navData[i];
                convertedGroupItems.push({
                    groupTitle: item.groupTitle,
                    items: createNavItems(item.items, '', 0),
                });
            }
            return convertedGroupItems;
        },
        [createNavItems]
    );

    useEffect(() => {
        setTabPath(tabs);
        const pathname = tabPath.includes(location.pathname.split('/')[4])
            ? location.pathname.split('/')[4]
            : location.pathname.split('/')[3];
        setActiveRoute(location.pathname.replace(`/${tabPath[tabPath.indexOf(pathname)]}`, ''));
    }, [tabPath, location.pathname]);

    const [navGroupItems] = useState(createNavGroupItems(pageDefinitions));
    return (
        <Drawer
            open={true}
            variant={isMobile ? 'temporary' : 'persistent'}
            activeItem={activeRoute}
            width={DRAWER_WIDTH}
            itemFontColor={theme.palette.text.primary}
            activeItemFontColor={theme.palette.primary.main}
            hidePadding
            activeItemBackgroundShape={'round'}
        >
            <DrawerHeader
                icon={isMobile ? <Menu /> : undefined}
                backgroundImage={backgroundImage}
                sx={{
                    '& .BluiDrawerHeader-background': {
                        backgroundImage: `${linearGradientOverlayImage}`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right',
                    },
                }}
                titleContent={
                    <div
                        style={{
                            display: 'flex',
                            zIndex: 1,
                            padding: '0 16px',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="subtitle1">Brightlayer UI</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant={'body2'} paragraph={false}>
                                Developer Docs
                            </Typography>
                            <Chip
                                sx={{
                                    color: 'primary.main',
                                    backgroundColor: 'white',
                                }}
                                icon={<img src={AvatarSvg} />}
                                label={<Typography variant={'overline'}>react</Typography>}
                                variant={'filled'}
                                size={'small'}
                            />
                        </Box>
                    </div>
                }
            />
            <DrawerBody>
                {navGroupItems.map((navGroupItem, index: number) => (
                    <DrawerNavGroup
                        key={index}
                        hidePadding
                        sx={{
                            '.BluiDrawerNavGroup-title': {
                                color: 'primary.main',
                            },
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                        title={navGroupItem.groupTitle}
                        items={navGroupItem.items}
                    />
                ))}
            </DrawerBody>
        </Drawer>
    );
};
