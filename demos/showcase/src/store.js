import { createStore } from 'redux';

export const store = createStore((state = 'light', action) => {
    switch (action.type) {
        case 'dark':
            return 'dark';
        case 'light':
            return 'light';
        case 'toggle':
            return state === 'light' ? 'dark' : 'light';
        default:
            return state;
    }
});
