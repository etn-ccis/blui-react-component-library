// import { LOCAL_USER_DATA, REMEMBER_ME_DATA } from '../constants';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // For cross compatibility pretend AsyncStorage is just window local storage
// const window = {
//     localStorage: {
//         getItem: (key: string): Promise<string | null> => AsyncStorage.getItem(key),
//         setItem: (key: string, value: string): Promise<void> => AsyncStorage.setItem(key, value),
//         removeItem: (key: string): Promise<void> => AsyncStorage.removeItem(key),
//     },
// };

// type AuthData = {
//     userId: string | undefined;
//     email: string | undefined;
//     rememberMeData: { user: string; rememberMe: boolean };
// };

// async function readAuthData(): Promise<AuthData> {
//     const jsonUserData = (await window.localStorage.getItem(LOCAL_USER_DATA)) || '{}';
//     const userData = JSON.parse(jsonUserData) as {
//         user?: string;
//         userId?: string;
//     };
//     const jsonRememberMeData = (await window.localStorage.getItem(REMEMBER_ME_DATA)) || '{}';
//     const rememberMeData = JSON.parse(jsonRememberMeData) as {
//         user: string;
//         rememberMe: boolean;
//     };
//     return {
//         userId: userData.userId,
//         email: userData.user,
//         rememberMeData,
//     };
// }

// function saveAuthCredentials(user: string, userId: string): void {
//     const userData = {
//         user,
//         userId,
//     };
//     void window.localStorage.setItem(LOCAL_USER_DATA, JSON.stringify(userData));
// }
// function saveRememberMeData(user: string, rememberMe: boolean): void {
//     const RememberMeData = {
//         user: rememberMe ? user : '',
//         rememberMe,
//     };
//     void window.localStorage.setItem(REMEMBER_ME_DATA, JSON.stringify(RememberMeData));
// }
// function clearAuthCredentials(): void {
//     void window.localStorage.removeItem(LOCAL_USER_DATA);
// }
// function clearRememberMeData(): void {
//     void window.localStorage.removeItem(REMEMBER_ME_DATA);
// }
// export const LocalStorage = {
//     readAuthData,
//     saveAuthCredentials,
//     saveRememberMeData,
//     clearAuthCredentials,
//     clearRememberMeData,
// };
