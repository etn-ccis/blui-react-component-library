import { createStore } from 'redux';

const initialState = {
    theme: 'light',
    direction: 'ltr',
};

export const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'DarkTheme':
            return {
                ...state,
                theme: 'dark',
            };
        case 'LightTheme':
            return {
                ...state,
                theme: 'light',
            };
        case 'ToggleTheme':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        case 'ToggleDirection':
            return {
                ...state,
                direction: state.direction === 'ltr' ? 'rtl' : 'ltr',
            };
        default:
            return state;
    }
});
