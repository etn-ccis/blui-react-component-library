import {CSSProperties} from "@material-ui/core/styles/withStyles";

export type InfoListItemClasses = {
    root?: string;
    avatar?: string;
    icon?: string;
    listItem?: string;
    rightComponent?: string;
    separator?: string;
    subtitle?: string;
    title?: string;
};

export type DividerType = 'full' | 'partial';
export type InfoListItemProps = {
    avatar?: boolean;
    backgroundColor?: string;
    chevron?: boolean;
    classes?: InfoListItemClasses;
    dense?: boolean;
    divider?: DividerType;
    fontColor?: string;
    hidePadding?: boolean;
    icon?: JSX.Element;
    iconColor?: string;
    leftComponent?: JSX.Element;
    onClick?: Function;
    rightComponent?: JSX.Element;
    ripple?: boolean;
    statusColor?: string;
    style?: CSSProperties;
    subtitle?: string | Array<string | JSX.Element>;
    subtitleSeparator?: string;
    title: string;
    wrapSubtitle?: boolean;
    wrapTitle?: boolean;
};