import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import { cx } from '@emotion/css';
import PropTypes from 'prop-types';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import channelValueClasses, {
    ChannelValueClasses,
    ChannelValueClassKey,
    getChannelValueUtilityClass,
} from './ChannelValueClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: ChannelValueProps): Record<ChannelValueClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        icon: ['icon'],
        text: ['text'],
        prefix: ['prefix'],
        suffix: ['suffix'],
        value: ['value'],
        units: ['units'],
    };

    return composeClasses(slots, getChannelValueUtilityClass, classes);
};

export type ChannelValueProps = Omit<BoxProps, 'prefix'> & {
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

const Root = styled(Box, {
    name: 'channel-value',
    slot: 'root',
})<Pick<ChannelValueProps, 'fontSize' | 'color'>>(({ fontSize, color }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight: 1.2,
    fontSize: fontSize,
    color: color,
    [`& .${channelValueClasses.text}`]: { fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 0 },
}));

const IconSpan = styled('span', {
    name: 'channel-value',
    slot: 'icon',
})<Pick<ChannelValueProps, null>>(() => ({
    marginRight: '0.35em',
    display: 'inline',
    fontSize: 'inherit',
}));

const Unit = styled(Typography, {
    name: 'channel-value',
    slot: 'units',
})<Pick<ChannelValueProps, null>>(() => ({
    fontWeight: 300,
    [`& .${channelValueClasses.suffix}`]: {},
    [`& .${channelValueClasses.prefix}`]: {
        '& + h6': {
            marginLeft: '0.25em',
        },
    },
}));

const Value = styled(Typography, {
    name: 'channel-value',
    slot: 'value',
})<Pick<ChannelValueProps, null>>(() => ({
    fontWeight: 600,
    '& + $suffix': {
        marginLeft: '0.25em',
    },
}));

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
        className: userClassName,
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
        ...otherProps
    } = props;
    const defaultClasses = useUtilityClasses(props);
    const prefixUnitAllowSpaceList = ['$'];
    const suffixUnitAllowSpaceList = ['%', '℉', '°F', '℃', '°C', '°'];

    const applyPrefix = useCallback(
        (): boolean =>
            prefix && unitSpace !== 'hide' && (unitSpace === 'show' || !prefixUnitAllowSpaceList.includes(units)),
        [prefix, units, unitSpace]
    );

    const applySuffix = useCallback(
        (): boolean =>
            !prefix && unitSpace !== 'hide' && (unitSpace === 'show' || !suffixUnitAllowSpaceList.includes(units)),
        [prefix, units, unitSpace]
    );

    const getUnitElement = useCallback(
        (): JSX.Element => (
            <>
                {units && (
                    <Unit
                        variant={'h6'}
                        color={'inherit'}
                        className={cx(
                            defaultClasses.text,
                            classes.text,
                            defaultClasses.units,
                            classes.units,
                            {
                                [defaultClasses.prefix]: applyPrefix(),
                                [defaultClasses.suffix]: applySuffix(),
                            },
                            {
                                [classes.prefix]: applyPrefix(),
                                [classes.suffix]: applySuffix(),
                            }
                        )}
                        data-test={'units'}
                    >
                        {units}
                    </Unit>
                )}
            </>
        ),
        [units, prefix, classes, defaultClasses, unitSpace]
    );

    return (
        <Root
            component="span"
            ref={ref}
            className={cx(defaultClasses.root, classes.root, userClassName)}
            data-test={'wrapper'}
            fontSize={fontSize}
            color={color}
            {...otherProps}
        >
            {icon && (
                <IconSpan className={cx(defaultClasses.icon, classes.icon)} data-test={'icon'}>
                    {changeIconDisplay(icon)}
                </IconSpan>
            )}
            {prefix && getUnitElement()}
            <Value
                variant={'h6'}
                color={'inherit'}
                className={cx(defaultClasses.text, classes.text, defaultClasses.value, classes.value)}
                data-test={'value'}
            >
                {value}
            </Value>
            {!prefix && getUnitElement()}
        </Root>
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
        text: PropTypes.string,
        prefix: PropTypes.string,
        suffix: PropTypes.string,
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
