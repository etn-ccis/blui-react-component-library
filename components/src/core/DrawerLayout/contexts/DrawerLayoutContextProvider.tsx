import { Ref, createContext, useContext } from 'react';

type DrawerLayoutContextType = {
    id?: string | number;
    padding: number;
    onPaddingChange: (id: number | string, padding: number) => void;
};

export const DrawerLayoutContext = createContext<DrawerLayoutContextType | null>(null);

export const useDrawerLayout = (): DrawerLayoutContextType => {
    const context = useContext(DrawerLayoutContext);
    if (context === null) {
        throw new Error('useSearch must be used within a DrawerLayoutContextProvider');
    }
    return context;
};