import { createContext, useContext } from 'react';

type DrawerLayoutContextType = {
    onPaddingChange: (id: number | string, padding: number) => void;
};

export const DrawerLayoutContext = createContext<DrawerLayoutContextType | null>({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPaddingChange: (id: number | string, padding: number) => null,
});

export const useDrawerLayout = (): DrawerLayoutContextType => {
    const context = useContext(DrawerLayoutContext);
    return context;
};
