import { createContext, useContext } from 'react';

type DrawerContextType = {
    isOpen: boolean;
};

export const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = (): DrawerContextType => {
    const context = useContext(DrawerContext);
    if (context === null) {
        throw new Error('useDrawerContext must be used within a DrawerContext Provider');
    }
    return context;
};
