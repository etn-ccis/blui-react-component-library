import React, { HTMLAttributes, ReactNode } from 'react';
// import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
// import clsx from 'clsx';

export type ToolbarMenuClasses = {
    root?: string;
    label?: string;
    dropdownArrow?: string;
    menuItem?: string;
};

const useStyles = makeStyles(() =>
    createStyles({
        // root: {
        //     display: 'flex',
        //     height: '100%',
        //     flexDirection: 'column',
        //     justifyContent: 'center',
        //     transition: (props: ToolbarMenuProps): string =>
        //         theme.transitions.create(['all'], {
        //             duration: props.animationDuration || theme.transitions.duration.standard,
        //             easing: theme.transitions.easing.easeInOut,
        //         }),
        // },
        // title: {
        //     fontSize: '1.875rem',
        //     transition: (props: ToolbarMenuProps): string =>
        //         theme.transitions.create(['all'], {
        //             duration: props.animationDuration || theme.transitions.duration.standard,
        //             easing: theme.transitions.easing.easeInOut,
        //         }),
        // },
        // subtitle: {
        //     fontSize: '1rem',
        //     transition: (props: ToolbarMenuProps): string =>
        //         theme.transitions.create(['all'], {
        //             duration: props.animationDuration || theme.transitions.duration.standard,
        //             easing: theme.transitions.easing.easeInOut,
        //         }),
        // },
        // info: {
        //     fontSize: '0.875rem',
        //     transition: (props: ToolbarMenuProps): string =>
        //         theme.transitions.create(['all'], {
        //             duration: props.animationDuration || theme.transitions.duration.standard,
        //             easing: theme.transitions.easing.easeInOut,
        //         }),
        //     fontWeight: 300,
        // },
    })
);

export type ToolbarMenuProps = HTMLAttributes<HTMLDivElement> & {
    /** Label Content */
    label?: ReactNode;
};

const ToolbarMenuRenderer: React.ForwardRefRenderFunction<unknown, ToolbarMenuProps> = (
    props: ToolbarMenuProps,
    ref: any
) => {
    const {
        label,
        className,
        ...otherDivProps
    } = props;
    // const defaultClasses = useStyles(props);
    //const animationDuration = durationProp || theme.transitions.duration.standard;
    return (
        <div ref={ref} {...otherDivProps}>
            <div className="toolbar-menu-label">{label}</div>
            <ArrowDropDown
                className="down-arrow"
            />
        </div>
    );
};
/**
 * [ToolbarMenu](https://brightlayer-ui-components.github.io/react/?path=/info/components-three-liner--get-read-me-story) component
 *
 * The `ToolbarMenu` used to display a dropdown menu with label.
 */
export const ToolbarMenu = React.forwardRef(ToolbarMenuRenderer);
ToolbarMenu.displayName = 'ToolbarMenu';
