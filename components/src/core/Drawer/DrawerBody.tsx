import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DrawerNavGroup, DrawerNavGroupProps } from './DrawerNavGroup';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        overflowY: 'auto',
    },
});

export type DrawerBodyProps = {
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

export const DrawerBody: React.FC<DrawerBodyProps> = (bodyProps) => {
    const classes = useStyles(bodyProps);
    const { backgroundColor } = bodyProps;
    const children = React.Children.toArray(bodyProps.children);
    return (
        <div className={classes.root} style={{ backgroundColor }}>
            {children.map((child: any, index) => {
                if (!child) {
                    return null;
                }

                if (child.type && child.type.displayName !== 'DrawerNavGroup') return null;
                const groupProps: DrawerNavGroupProps = child.props;

                return (
                    <DrawerNavGroup
                        {...groupProps}
                        key={index.toString()}
                        activeBackgroundColor={groupProps.activeBackgroundColor || bodyProps.activeBackgroundColor}
                        activeFontColor={groupProps.activeFontColor || bodyProps.activeFontColor}
                        activeIconColor={groupProps.activeIconColor || bodyProps.activeIconColor}
                        backgroundColor={groupProps.backgroundColor || bodyProps.backgroundColor}
                        chevron={groupProps.chevron === undefined ? bodyProps.chevron : groupProps.chevron}
                        collapseIcon={groupProps.collapseIcon || bodyProps.collapseIcon}
                        divider={groupProps.divider === undefined ? bodyProps.divider : groupProps.chevron}
                        expandIcon={groupProps.expandIcon || bodyProps.expandIcon}
                        fontColor={groupProps.fontColor || bodyProps.fontColor}
                        iconColor={groupProps.iconColor || bodyProps.iconColor}
                        onSelect={bodyProps.onSelect}
                        open={bodyProps.open}
                        ripple={groupProps.ripple === undefined ? bodyProps.ripple : groupProps.ripple}
                        titleColor={groupProps.titleColor || bodyProps.titleColor}
                    />
                );
            })}
        </div>
    );
};

DrawerBody.displayName = 'DrawerBody';
DrawerBody.propTypes = {
    activeBackgroundColor: PropTypes.string,
    activeFontColor: PropTypes.string,
    activeIconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    divider: PropTypes.bool,
    expandIcon: PropTypes.element,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    ripple: PropTypes.bool,
    titleColor: PropTypes.string,
};

DrawerBody.defaultProps = {};
