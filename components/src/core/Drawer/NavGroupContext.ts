import { createContext, useContext } from 'react';

type NavGroupContextType = {
    activeHierarchy: string[];
};

export const NavGroupContext = createContext<NavGroupContextType>({
    activeHierarchy: [],
});

export const useNavGroupContext = (): NavGroupContextType => useContext(NavGroupContext);
