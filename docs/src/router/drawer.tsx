import React, { useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useLocation } from 'react-router';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import { externalLinkDefinitions, pageDefinitions, RouteConfig } from '../__configuration__/navigationMenu/navigation';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { DRAWER_WIDTH } from '../shared';
import { React as ReactIcon } from '@brightlayer-ui/icons-mui';
import { Theme } from '@mui/material';
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

const styles = {
    denseDrawerItem: {
        '& .BluiDrawerNavItem-root, & .BluiInfoListItem-root, & .MuiButtonBase-root.MuiListItemButton-root': {
            height: (theme: Theme): string => theme.spacing(5),
        },
        paddingBottom: (theme: Theme): string => theme.spacing(2),
    },
    navGroupTopDivider: {
        borderTop: (theme: Theme): string => `1px solid ${theme.palette.divider}`,
        mt: 1,
    },
};

export const NavigationDrawer: React.FC = () => {
    const drawerOpen = useAppSelector((state: RootState) => state.appState.drawerOpen);
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const activeItem = location.pathname.replace(/\/(examples|api-docs|playground)/, '').replace(/\/$/, '');

    const handleNavigate = useCallback(
        (id: string): void => {
            const pathArray = location.pathname.split('/');
            const tabName = tabs.includes(pathArray[4])
                ? pathArray[4]
                : tabs.includes(pathArray[3])
                ? pathArray[3]
                : '';
            navigate(`${id}${id.includes('/component-catalog') || !id.includes('/components/') ? '' : tabName || ''}`);
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
                    <Stack
                        justifyContent={'center'}
                        sx={{
                            zIndex: 1,
                            px: 2,
                        }}
                    >
                        <Typography variant="subtitle1">Brightlayer User Interface</Typography>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                            <Typography variant={'body2'} paragraph={false}>
                                Developer Docs
                            </Typography>
                            <Chip
                                sx={{
                                    color: theme.palette.mode === 'light' ? 'primary.main' : 'primary.dark',
                                    backgroundColor: 'white',
                                }}
                                icon={<ReactIcon color={'primary'} />}
                                label={
                                    <Typography variant={'overline'} sx={{ fontWeight: 700, letterSpacing: 1 }}>
                                        REACT
                                    </Typography>
                                }
                                variant={'filled'}
                                size={'small'}
                            />
                        </Stack>
                    </Stack>
                }
                onClick={(): void => navigate('/')}
            />
            <DrawerBody hidePadding sx={styles.denseDrawerItem}>
                {pageDefinitions.map(
                    (navGroup, navGroupIndex) =>
                        !navGroup.hidden && (
                            <DrawerNavGroup
                                titleColor={theme.palette.primary.main}
                                key={navGroup.title}
                                title={navGroup.title}
                                items={convertNavItems(
                                    navGroup.pages || [],
                                    navGroup.path || '',
                                    0,
                                    handleNavigate,
                                    dispatch
                                )}
                                titleDivider={false}
                                // navGroupIndex 0 is a hidden group used by the landing page
                                sx={navGroupIndex !== 1 ? styles.navGroupTopDivider : undefined}
                            />
                        )
                )}
                <DrawerNavGroup
                    title="COMMUNITY"
                    titleColor={theme.palette.primary.main}
                    items={externalLinkDefinitions}
                    titleDivider={false}
                    sx={styles.navGroupTopDivider}
                />
            </DrawerBody>
        </Drawer>
    );
};
