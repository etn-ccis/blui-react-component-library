import { createContext, useContext } from 'react';

type DrawerContextType = {
    isOpen: boolean;
    variant: 'temporary' | 'persistent' | 'permanent' | 'rail';
    condensed: boolean;
};

export const DrawerContext = createContext<DrawerContextType>({
    isOpen: true,
    variant: 'persistent',
    condensed: false,
});

export const useDrawerContext = (): DrawerContextType => useContext(DrawerContext);
