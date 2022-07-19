import { createContext, useContext } from 'react';

type DrawerContextType = {
    drawerOpen: boolean;
    setDrawerOpen: (open: boolean) => void;
};

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawer = (): DrawerContextType => {
    const context = useContext(DrawerContext);
    if (context === null) {
        throw new Error('useDrawer must be used within a DrawerContextProvider');
    }
    return context;
};
