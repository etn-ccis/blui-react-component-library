import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import { combine } from '../utilities';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = makeStyles({
    wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 1.2,
    },
    icon: {
        marginRight: 4,
        display: 'inline',
        fontSize: 'inherit',
    },
    text: {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 0,
    },
    unit: {
        fontWeight: 300,
    },
    value: {
        fontWeight: 600,
    },
});

export type ChannelValueProps = {
    value: number | string;
    icon?: JSX.Element;
    units?: string;
    unit?: string; // alias units
    prefix?: boolean;
    fontSize?: number | string;
    color?: string;
};

export const ChannelValue: React.FC<ChannelValueProps> = (props) => {
    const { color, fontSize, icon, prefix, value, unit: unitAlias, units } = props;
    const classes = styles(props);

    const unit = unitAlias || units;

    const getUnitElement = useCallback(
        (): JSX.Element => (
            <>
                {unit && (
                    <Typography
                        variant={'h6'}
                        color={'inherit'}
                        className={combine([classes.text, classes.unit])}
                        data-test={'unit'}
                    >
                        {unit}
                    </Typography>
                )}
            </>
        ),
        [unit, units, classes, combine]
    );

    const changeIconDisplay = (newIcon: JSX.Element): JSX.Element =>
        React.cloneElement(newIcon, {
            style: Object.assign({}, newIcon.props.style, { display: 'block', fontSize: 'inherit' }),
        });

    return (
        <span className={classes.wrapper} style={{ fontSize, color }} data-test={'wrapper'}>
            {icon && (
                <span className={classes.icon} data-test={'icon'}>
                    {changeIconDisplay(icon)}
                </span>
            )}
            {prefix && getUnitElement()}
            <Typography
                variant={'h6'}
                color={'inherit'}
                className={combine([classes.text, classes.value])}
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
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element,
    unit: PropTypes.string,
    units: PropTypes.string,
    prefix: PropTypes.bool,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};
ChannelValue.defaultProps = {
    color: 'inherit',
    fontSize: 'inherit',
    prefix: false,
};
