import { LOCAL_USER_DATA, REMEMBER_ME_DATA } from '../constants';

type AuthData = {
    userId: string | undefined;
    email: string | undefined;
    rememberMeData: { user: string; rememberMe: boolean };
};

async function readAuthData(): Promise<AuthData> {
    const jsonUserData = window.localStorage.getItem(LOCAL_USER_DATA) || '{}';
    const userData = (await JSON.parse(jsonUserData)) as {
        user?: string;
        userId?: string;
    };
    const jsonRememberMeData = window.localStorage.getItem(REMEMBER_ME_DATA) || '{}';
    const rememberMeData = (await JSON.parse(jsonRememberMeData)) as {
        user: string;
        rememberMe: boolean;
    };
    return {
        userId: userData.userId,
        email: userData.user,
        rememberMeData: rememberMeData,
    };
}

function saveAuthCredentials(user: string, userId: string): void {
    const userData = {
        user: user,
        userId: userId,
    };
    window.localStorage.setItem(LOCAL_USER_DATA, JSON.stringify(userData));
}
function saveRememberMeData(user: string, rememberMe: boolean): void {
    const RememberMeData = {
        user: rememberMe ? user : '',
        rememberMe: rememberMe,
    };
    window.localStorage.setItem(REMEMBER_ME_DATA, JSON.stringify(RememberMeData));
}
function clearAuthCredentials(): void {
    window.localStorage.removeItem(LOCAL_USER_DATA);
}
function clearRememberMeData(): void {
    window.localStorage.removeItem(REMEMBER_ME_DATA);
}
export const LocalStorage = {
    readAuthData,
    saveAuthCredentials,
    saveRememberMeData,
    clearAuthCredentials,
    clearRememberMeData,
};
