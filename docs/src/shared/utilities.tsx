import React from 'react';
import Add from '@mui/icons-material/Add';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Device from '@brightlayer-ui/icons-mui/Device';
import Devices from '@mui/icons-material/Devices';
import Fan from '@brightlayer-ui/icons-mui/Fan';
import FanCircled from '@brightlayer-ui/icons-mui/FanCircled';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import Home from '@mui/icons-material/Home';
import Menu from '@mui/icons-material/Menu';
import Place from '@mui/icons-material/Place';
import PinDrop from '@mui/icons-material/PinDrop';
import Remove from '@mui/icons-material/Remove';
import RouterIcon from '@mui/icons-material/Router';
import SensorsOffIcon from '@mui/icons-material/SensorsOff';
import TrendingUp from '@mui/icons-material/TrendingUp';
import TrendingDown from '@mui/icons-material/TrendingDown';
import { RootState } from '../redux/store';
import { ComponentType, PropsType } from '../__types__';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';

const topologyBgImage = require('../shared/images/topology_40.png');
const farmBgImage = require('../shared/images/farm.jpg');

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

export const getIcon = (icon: string, iconProps?: SvgIconProps): JSX.Element | undefined => {
    switch (icon) {
        case '<Add />':
            return <Add />;
        case '<AddAPhoto />':
            return <AddAPhoto />;
        case '<Device />':
            return React.createElement(Device, iconProps);
        case '<Devices />':
            return React.createElement(Devices, iconProps);
        case '<Fan />':
            return React.createElement(Fan, iconProps);
        case '<FanCircled />':
            return React.createElement(FanCircled, iconProps);
        case '<FitnessCenter />':
            return <FitnessCenter />;
        case '<Home />':
            return <Home />;
        case '<Menu />':
            return <Menu />;
        case '<Place />':
            return <Place />;
        case '<PinDrop />':
            return <PinDrop />;
        case '<Remove />':
            return <Remove />;
        case '<RouterIcon />':
            return React.createElement(RouterIcon, iconProps);
        case '<SensorsOffIcon />':
            return React.createElement(SensorsOffIcon, iconProps);
        case '<TrendingUp />':
            return React.createElement(TrendingUp, iconProps);
        case '<TrendingDown />':
            return React.createElement(TrendingDown, iconProps);
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

export const getComponentState = (componentName: string, state: RootState['componentsPropsState']): ComponentType => {
    switch (componentName) {
        case 'Drawer':
            return state.drawerComponent;
        case 'Drawer Nav Group':
            return state.drawerNavGroupComponent;
        case 'Drawer Nav Item':
            return state.drawerNavItemComponent;
        case 'Drawer Rail Item':
            return state.drawerRailItemComponent;
        default:
            return state.drawerComponent;
    }
};

export const getImage = (image: string): string | undefined => {
    switch (image.toLowerCase()) {
        case 'pattern':
            return topologyBgImage;
        case 'farm':
            return farmBgImage;
        case 'undefined':
            return undefined;
        default:
            return undefined;
    }
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
    state: ComponentType,
    propName: string,
    groupType?: string
): PropsType | undefined => {
    switch (groupType) {
        case 'props':
            return state.props?.filter((prop) => prop.propName === propName)[0];
        case 'sharedProps':
            return state.sharedProps?.filter((prop) => prop.propName === propName)[0];
        case 'otherProps':
            return state.otherProps?.filter((prop) => prop.propName === propName)[0];
        default:
            return state.props?.filter((prop) => prop.propName === propName)[0];
    }
};

export const hideDefaultPropsFromSnippet = (
    state: ComponentType,
    propName: string,
    currentValue: any | undefined,
    groupType?: string,
    themeDefaultValue?: string | number
): string => {
    const knob = filterPropsAsPerGroupType(state, propName, groupType);
    if (knob?.defaultValue === currentValue || themeDefaultValue === currentValue) {
        return '';
    }
    switch (knob?.propType) {
        case 'string':
        case 'string | Array<React.ReactNode>':
            return currentValue === '' ? '' : `${propName}={"${currentValue}"}`;
        case 'ReactNode':
            if (knob.inputType === 'string') {
                return currentValue === '' ? '' : `${propName}={"${currentValue}"}`;
            }
            return `${propName}={${currentValue}}`;
        case 'boolean':
            return `${propName}={${currentValue}}`;
        case 'number':
        case 'number | string':
            return currentValue === '' ? '' : `${propName}={${currentValue}}`;
        default:
            return `${propName}={${currentValue}}`;
    }
};

export const removeEmptyLines = (code: string): string => code.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const getBodyFiller = (): JSX.Element => (
    <Box sx={{ p: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
    </Box>
);
