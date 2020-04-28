import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export type ChannelValueClasses = {
    root?: string;
    icon?: string;
    units?: string;
    value?: string;
};
export type ChannelValueProps = {
    classes?: ChannelValueClasses;
    color?: string;
    fontSize?: number | string;
    icon?: JSX.Element;
    prefix?: boolean;
    units?: string;
    value: number | string;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1.2,
            fontSize: (props: ChannelValueProps): string | number => props.fontSize,
            color: (props: ChannelValueProps): string => props.color,
        },
        icon: {
            marginRight: theme.spacing(0.5),
            display: 'inline',
            fontSize: 'inherit',
        },
        text: {
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 0,
        },
        units: {
            fontWeight: 300,
        },
        value: {
            fontWeight: 600,
        },
    })
);

export const ChannelValue: React.FC<ChannelValueProps> = (props) => {
    const { classes, icon, prefix, units, value } = props;
    const defaultClasses = useStyles(props);

    const getUnitElement = useCallback(
        (): JSX.Element => (
            <>
                {units && (
                    <Typography
                        variant={'h6'}
                        color={'inherit'}
                        className={clsx(defaultClasses.text, defaultClasses.units, classes.units)}
                        data-test={'units'}
                    >
                        {units}
                    </Typography>
                )}
            </>
        ),
        [units, classes]
    );

    const changeIconDisplay = (newIcon: JSX.Element): JSX.Element =>
        React.cloneElement(newIcon, {
            style: Object.assign({}, newIcon.props.style, { display: 'block', fontSize: 'inherit' }),
        });

    return (
        <span className={clsx(defaultClasses.root, classes.root)} data-test={'wrapper'}>
            {icon && (
                <span className={clsx(defaultClasses.icon, classes.icon)} data-test={'icon'}>
                    {changeIconDisplay(icon)}
                </span>
            )}
            {prefix && getUnitElement()}
            <Typography
                variant={'h6'}
                color={'inherit'}
                className={clsx(defaultClasses.text, defaultClasses.value, classes.value)}
                data-test={'value'}
            >
                {value}
            </Typography>
            {!prefix && getUnitElement()}
        </span>
    );
};

ChannelValue.displayName = 'ChannelValue';
ChannelValue.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        icon: PropTypes.string,
        value: PropTypes.string,
        units: PropTypes.string,
    }),
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.element,
    prefix: PropTypes.bool,
    units: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ChannelValue.defaultProps = {
    classes: {},
    color: 'inherit',
    fontSize: 'inherit',
    prefix: false,
};
