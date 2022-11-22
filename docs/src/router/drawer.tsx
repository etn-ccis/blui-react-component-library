import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useLocation } from 'react-router';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import { pageDefinitions, RouteConfig } from '../__configuration__/navigationMenu/navigation';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { DRAWER_WIDTH } from '../shared';
import AvatarSvg from '../assets/react_logo.svg';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeDrawer, toggleDrawer } from '../redux/appState';

const backgroundImage = require('../assets/cubes_tile.png');
const linearGradientOverlayImage = `linear-gradient(to right, rgba(0, 123, 193, 1) 22.4%, rgba(0, 123, 193, 0.2) 100%), url(${backgroundImage})`;

const tabs = ['examples', 'api-docs', 'playground'];

const convertNavItems = (
    navData: RouteConfig[],
    parentUrl: string,
    depth: number,
    handleNavigate: (u: string) => void,
    dispatch: any
): NavItem[] => {
    const convertedItems: NavItem[] = [];
    for (let i = 0; i < navData.length; i++) {
        const item = navData[i];
        const fullURL = `${parentUrl}${item.path || ''}`;
        convertedItems.push({
            title: item.title,
            icon: depth === 0 ? item.icon : undefined,
            itemID: fullURL.replace(/\/$/, ''),
            hidePadding: depth > 0 ? false : true,
            onClick: item.element
                ? (): void => {
                      handleNavigate(fullURL);
                      dispatch(toggleDrawer());
                  }
                : undefined,
            items: item.pages
                ? convertNavItems(item.pages, `${parentUrl}${item.path || ''}`, depth + 1, handleNavigate, dispatch)
                : undefined,
        });
    }
    return convertedItems;
};

export const NavigationDrawer: React.FC = () => {
    const drawerOpen = useAppSelector((state: RootState) => state.appState.drawerOpen);
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const activeItem = location.pathname.replace(/\/(examples|api-docs|playground)/, '');

    const handleNavigate = useCallback(
        (id: string): void => {
            const tabName = tabs.includes(location.pathname.split('/')[4])
                ? location.pathname.split('/')[4]
                : location.pathname.split('/')[3];
            navigate(`${id}${tabName || ''}`);
            dispatch(toggleDrawer());
        },
        [location.pathname, dispatch, navigate]
    );

    return (
        <Drawer
            open={drawerOpen}
            variant={lgDown ? 'temporary' : 'permanent'}
            activeItem={activeItem}
            width={DRAWER_WIDTH}
            hidePadding
            activeItemBackgroundShape={'round'}
            ModalProps={{
                onClose: (): void => {
                    dispatch(closeDrawer());
                },
            }}
        >
            <DrawerHeader
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
                            alignItems: 'flex-start',
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="subtitle1">Brightlayer User Interface</Typography>
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
                                label={
                                    <Typography variant={'overline'} sx={{ fontWeight: 700, letterSpacing: 1 }}>
                                        REACT
                                    </Typography>
                                }
                                variant={'filled'}
                                size={'small'}
                            />
                        </Box>
                    </div>
                }
            />
            <DrawerBody hidePadding>
                {pageDefinitions.map((navGroup) => (
                    <DrawerNavGroup
                        key={navGroup.title}
                        title={navGroup.title}
                        items={convertNavItems(navGroup.pages || [], navGroup.path || '', 0, handleNavigate, dispatch)}
                    />
                ))}
            </DrawerBody>
        </Drawer>
    );
};
