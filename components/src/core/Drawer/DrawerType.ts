import React from 'react';

export type DrawerProperties = {
    activeBackgroundColor?: string;
    activeFontColor?: string;
    activeIconColor?: string;
    backgroundColor?: string;
    chevron?: boolean;
    collapseIcon?: JSX.Element;
    divider?: boolean;
    expandIcon?: JSX.Element;
    fontColor?: string;
    iconColor?: string;
    onSelect?: Function;
    open?: boolean;
    ripple?: boolean;
    titleColor?: string;
};
