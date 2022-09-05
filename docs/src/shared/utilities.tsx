import Add from '@mui/icons-material/Add';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import Menu from '@mui/icons-material/Menu';
import PinDrop from '@mui/icons-material/PinDrop';
import Remove from '@mui/icons-material/Remove';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Fan from '@brightlayer-ui/icons-mui/Fan';
import { ComponentType, PropsType } from '../__types__';
import * as Colors from '@brightlayer-ui/colors';

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

export const getIcon = (icon: string): JSX.Element | undefined => {
    switch (icon) {
        case '<Add />':
            return <Add />;
        case '<AddAPhoto />':
            return <AddAPhoto />;
        case '<Fan />':
            return <Fan fontSize={'inherit'} htmlColor={Colors.white[50]} />;
        case '<FitnessCenter />':
            return <FitnessCenter />;
        case '<Menu />':
            return <Menu />;
        case '<PinDrop />':
            return <PinDrop />;
        case '<Remove />':
            return <Remove />;
        case '<TrendingUp />':
            return <TrendingUp />;
        case 'undefined':
        default:
            return undefined;
    }
};

export const createProps = (props: PropsType[]): any => {
    const componentProps = props?.reduce(
        (acc: any, cur: any) => ({
            ...acc,
            [cur.propName]: Array.isArray(cur.inputValue) ? cur.defaultValue : cur.inputValue,
        }),
        {}
    );
    return componentProps;
};

export const getComponentState = (componentName: string, state: any): ComponentType => {
    switch (componentName) {
        case 'Drawer Header':
            return state.drawerHeaderComponent;
        case 'Drawer':
            return state.drawerComponent;
        case 'Hero':
            return state.heroComponent;
        default:
            return state.drawerComponent;
    }
};

export const hideDefaultPropsFromSnippet = (
    state: ComponentType,
    propName: string,
    currentValue: any,
    groupType?: string
): string => {
    const knob =
        groupType !== 'props'
            ? state.sharedProps?.filter((prop) => prop.propName === propName)[0]
            : state.props?.filter((prop) => prop.propName === propName)[0];
    if (knob?.defaultValue === currentValue) {
        return '';
    }
    if (knob?.propType === 'string') {
        return `${propName}={"${currentValue}"}`;
    }
    return `${propName}={${currentValue}}`;
};

export const removeEmptyLines = (code: string): string => code.replace(/^\s*$(?:\r\n?|\n)/gm, '');
