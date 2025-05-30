import { createContext, useContext } from 'react';

export type LoginData = {
    email: string;
    rememberMe: boolean;
};

export type AppContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    loginData: LoginData;
    onUserAuthenticated: (args: { email: string; userId: string; rememberMe: boolean }) => void;
    onUserNotAuthenticated: (clearRememberMe?: boolean, overrideRememberMeEmail?: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    setLoginData: (args: LoginData) => void;
    showChangePasswordDialog: boolean;
    setShowChangePasswordDialog: (arg: boolean) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);

    if (context === null) {
        throw new Error('useApp must be used within a AppContextProvider');
    }
    return context;
};
