import { createContext, useContext } from 'react';

type DrawerContextType = {
    isOpen: boolean;
};

export const DrawerContext = createContext<DrawerContextType>({ isOpen: true });

export const useDrawerContext = (): DrawerContextType => useContext(DrawerContext);
