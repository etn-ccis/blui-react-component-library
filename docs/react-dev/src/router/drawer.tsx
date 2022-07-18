import React, { useState, useCallback } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import { useDrawer } from '../contexts/drawerContextProvider';
import Menu from '@mui/icons-material/Menu';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@brightlayer-ui/react-components';
import { PAGES } from './routes';

export const NavigationDrawer: React.FC = () => {
    const { drawerOpen, setDrawerOpen } = useDrawer();
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [selected, setSelected] = useState(location.pathname);

    const handleNavigate = useCallback(
        (id: string): void => {
            navigate(id);
            setSelected(id);
        },
        [navigate, setSelected]
    );

    return (
        <Drawer
            open={true}
            // ModalProps={{
            //     onBackdropClick: (): void => {
            //         setDrawerOpen(false);
            //     },
            // }}
            variant={isMobile ? 'temporary' : 'persistent'}
            activeItem={selected}
        >
            <DrawerHeader
                title={'Brightlayer UI'}
                subtitle={'Developer Docs'}
                icon={<Menu />}
                // onIconClick={(): void => {
                //     setDrawerOpen(!drawerOpen);
                // }}
            />
            <DrawerBody>
                <DrawerNavGroup
                    items={PAGES.map((page) => {
                        const Icon = page.icon;
                        return {
                            title: page.title,
                            itemID: page.route || '',
                            icon: <Icon />,
                            onClick:
                                page.route !== undefined
                                    ? (): void => {
                                          handleNavigate(page.route);
                                          if (isMobile) setDrawerOpen(false);
                                      }
                                    : undefined,
                        };
                    })}
                    hidePadding
                />
            </DrawerBody>
        </Drawer>
    );
};
