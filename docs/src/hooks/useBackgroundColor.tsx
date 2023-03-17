import { useEffect } from 'react';

export const useBackgroundColor = (color = ''): void => {
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);
};
