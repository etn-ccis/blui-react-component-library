export const convertColorNameToHex = (str?: string): string => {
    if (!str) {
        return '';
    }
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = str;
    return ctx.fillStyle;
};
