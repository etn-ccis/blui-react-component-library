import { createContext, useContext } from 'react';

type DrawerLayoutContextType = {
    setPadding: (padding: number | string) => void;
    setDrawerOpen: (open: boolean) => void;
};

export const DrawerLayoutContext = createContext<DrawerLayoutContextType | null>({
    /* eslint-disable @typescript-eslint/no-unused-vars */
    setPadding: (padding: number | string) => null,
    setDrawerOpen: (open: boolean) => false,
    /* eslint-enable @typescript-eslint/no-unused-vars */
});

export const useDrawerLayout = (): DrawerLayoutContextType => {
    const context = useContext(DrawerLayoutContext);
    return context;
};
