import { createContext, useContext } from 'react';

type DrawerLayoutContextType = {
    onPaddingChange: (padding: number) => void;
};

export const DrawerLayoutContext = createContext<DrawerLayoutContextType | null>({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onPaddingChange: (padding: number) => null,
});

export const useDrawerLayout = (): DrawerLayoutContextType => {
    const context = useContext(DrawerLayoutContext);
    return context;
};
