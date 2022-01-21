import React, { useCallback, HTMLAttributes } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export type ChannelValueClasses = {
    root?: string;
    icon?: string;
    units?: string;
    value?: string;
};
export type ChannelValueProps = Omit<HTMLAttributes<HTMLSpanElement>, 'prefix'> & {
    /** Custom classes for default style overrides */
    classes?: ChannelValueClasses;
    /** The color used for the text elements
     *
     * Default: 'inherit'
     */
    color?: string;
    /** The size to use for the text elements
     *
     *  Default: 'inherit'
     */
    fontSize?: number | string;
    /** A component to render for the icon */
    icon?: JSX.Element;
    /** Whether to show the units before the value (e.g., for currency)
     *
     *  Default: false
     */
    prefix?: boolean;
    /** Text to display for the units (light text) */
    units?: string;
    /** Whether to show a space between the value and units
     *
     * Default: auto (shows space except for white list items)
     *
     * prefixUnitAllowSpaceList: ['$'];
     * suffixUnitAllowSpaceList: ['%', '℉','°F','℃','°C','°']
     */
    unitSpace?: 'show' | 'hide' | 'auto';
    /** Text to display for the value (bold text) */
    value: number | string;
};

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1.2,
            fontSize: (props: ChannelValueProps): string | number => props.fontSize,
            color: (props: ChannelValueProps): string => props.color,
        },
        icon: {
            marginRight: '0.35em',
            display: 'inline',
            fontSize: 'inherit',
        },
        text: {
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 0,
        },
        prefix: {
            '& + h6': {
                marginLeft: '0.25em',
            },
        },
        suffix: {},
        units: {
            fontWeight: 300,
        },
        value: {
            fontWeight: 600,
            '& + $suffix': {
                marginLeft: '0.25em',
            },
        },
    })
);

const changeIconDisplay = (newIcon: JSX.Element): JSX.Element =>
    React.cloneElement(newIcon, {
        style: Object.assign({}, newIcon.props.style, { display: 'block', fontSize: 'inherit' }),
    });

const ChannelValueRender: React.ForwardRefRenderFunction<unknown, ChannelValueProps> = (
    props: ChannelValueProps,
    ref: any
) => {
    const {
        classes,
        icon,
        prefix,
        units,
        unitSpace,
        value,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        color,
        fontSize,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherSpanProps
    } = props;
    const defaultClasses = useStyles(props);
    const prefixUnitAllowSpaceList = ['$'];
    const suffixUnitAllowSpaceList = ['%', '℉', '°F', '℃', '°C', '°'];

    const applyPrefix = useCallback((): boolean => prefix && unitSpace !== 'hide' && (unitSpace === 'show' || !prefixUnitAllowSpaceList.includes(units)), [units, unitSpace]);

    const applySuffix = useCallback((): boolean => !prefix && unitSpace !== 'hide' && (unitSpace === 'show' || !suffixUnitAllowSpaceList.includes(units)), [units, unitSpace]);

    const getUnitElement = useCallback(
        (): JSX.Element => (
            <>
                {units && (
                    <Typography
                        variant={'h6'}
                        color={'inherit'}
                        className={clsx(defaultClasses.text, defaultClasses.units, classes.units, {
                            [defaultClasses.prefix]: applyPrefix(),
                            [defaultClasses.suffix]: applySuffix(),
                        })}
                        data-test={'units'}
                    >
                        {units}
                    </Typography>
                )}
            </>
        ),
        [units, prefix, classes, defaultClasses, unitSpace]
    );

    return (
        <span ref={ref} className={clsx(defaultClasses.root, classes.root)} data-test={'wrapper'} {...otherSpanProps}>
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
/**
 * [ChannelValue](https://brightlayer-ui-components.github.io/react/?path=/info/components-channel-value--get-read-me-story) component
 *
 * Used to show a stylized value and its units.
 * You may also include an icon.
 */
export const ChannelValue = React.forwardRef(ChannelValueRender);

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
    unitSpace: PropTypes.oneOf(['show', 'hide', 'auto']),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
ChannelValue.defaultProps = {
    classes: {},
    color: 'inherit',
    fontSize: 'inherit',
    prefix: false,
};
