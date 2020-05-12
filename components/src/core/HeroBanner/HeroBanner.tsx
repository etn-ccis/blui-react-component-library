import React, { HTMLAttributes } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export type HeroBannerClasses = {
    root?: string;
};

export type HeroBannerProps = HTMLAttributes<HTMLDivElement> & {
    classes?: HeroBannerClasses;
    divider?: boolean;
    limit?: number;
};

export const HeroBanner = (props: HeroBannerProps): JSX.Element => {
    const { classes, divider, limit, ...otherDivProps } = props;
    const defaultClasses = useStyles(props);
    const isArray = Array.isArray(props.children);
    return (
        <>
            <div className={clsx(defaultClasses.root, classes.root)} {...otherDivProps}>
                {props.children &&
                    isArray &&
                    (props.children as React.ReactNodeArray).slice(0, limit).map((child: any) => child)}
                {props.children && !isArray && <>{props.children}</>}
            </div>
            {divider && <Divider />}
        </>
    );
};

HeroBanner.displayName = 'HeroBanner';
HeroBanner.propType = {
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    divider: PropTypes.bool,
    limit: PropTypes.number,
};
HeroBanner.defaultProps = {
    classes: {},
    divider: false,
    limit: 4,
};
