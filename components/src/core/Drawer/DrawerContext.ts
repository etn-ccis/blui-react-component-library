import { createContext, useContext } from 'react';
import { DrawerVariant } from './types';

type DrawerContextType = {
    open?: boolean;
    variant?: DrawerVariant;
    condensed?: boolean;
    activeItem?: string;
    onItemSelect?: (id: string) => void;
    width?: number;
};

export const DrawerContext = createContext<DrawerContextType>({
    open: true,
    variant: 'persistent',
    condensed: false,
});

export const useDrawerContext = (): DrawerContextType => useContext(DrawerContext);
