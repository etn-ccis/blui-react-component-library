import { PlaygroundComponent, PlaygroundComponentProp } from './types';
import { SvgIconProps } from '@mui/material/SvgIcon';

// const topologyBgImage = require('../../shared/images/topology_40.png');
// const farmBgImage = require('../shared/images/farm.jpg');

export const getSnakeCase = (str: string): string => str.replace(/[A-Z]/g, '_$&').toLowerCase().slice(1);

export const getKebabCase = (str: string): string => str.replace(/[A-Z]/g, '-$&').toLowerCase().slice(1);

export const snakeToKebabCase = (str: string): string => str.replaceAll('_', '-').toLowerCase();

export const unCamelCase = (val: string): string =>
    val
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        .replace(/^./, (str) => str.toUpperCase());

export const titleCase = (val: string): string =>
    val.replace('-', ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

export const snakeToTitleCase = (str: string): string =>
    str.replaceAll('_', ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

export const capitalize = (val: string): string => val.charAt(0).toUpperCase() + val.slice(1);

// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
export function copyTextToClipboard(text: string, onCopied?: () => void): void {
    void navigator.clipboard.writeText(text);
    if (onCopied) onCopied();
}

export function findStringIndex(arr: any[], str: string): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
    return -1;
}

/**
 * Get markdown title hash for markdown doc titles.
 * @param str The title string to be hashed
 * @returns The hashed string to be used in a URL, all lowercase
 */
export const getHash = (str: string): string =>
    str
        .replace(/ /g, '-')
        .replace(/[#?/&]/g, '')
        .toLowerCase();

export const createProps = (props: PlaygroundComponentProp[]): any => {
    const componentProps = props?.reduce(
        (acc: any, cur: any) => ({
            ...acc,
            [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
        }),
        {}
    );
    return componentProps;
};

const iterateIconProps = (iconProps: any): string => {
    let str = '';
    for (const prop in iconProps) {
        str = `${str}` + `${prop}="${iconProps[prop]}" `;
    }
    return str;
};

export const getIconWithProp = (icon: string, iconProps: SvgIconProps): string => {
    const index = icon.lastIndexOf('/>');
    const result = icon.slice(0, index) + iterateIconProps(iconProps) + icon.slice(index);
    return result;
};

export const filterPropsAsPerGroupType = (
    state: PlaygroundComponent,
    propName: string,
    groupType?: string
): PlaygroundComponentProp | undefined => {
    switch (groupType) {
        case 'props':
            return state.props?.filter((prop: PlaygroundComponentProp) => prop.propName === propName)[0];
        case 'sharedProps':
            return state.sharedProps?.filter((prop: PlaygroundComponentProp) => prop.propName === propName)[0];
        case 'otherProps':
            return state.additionalProps?.filter((prop: PlaygroundComponentProp) => prop.propName === propName)[0];
        default:
            return state.props?.filter((prop: PlaygroundComponentProp) => prop.propName === propName)[0];
    }
};

export const removeEmptyLines = (code: string): string => code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
