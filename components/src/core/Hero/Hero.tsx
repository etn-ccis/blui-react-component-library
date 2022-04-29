import React, { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import { ChannelValue, ChannelValueProps as ChannelValuePropsType } from '../ChannelValue';
import { cx } from '@emotion/css';
import PropTypes from 'prop-types';
import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import { getHeroUtilityClass, HeroClasses, HeroClassKey } from './HeroClasses';

const useUtilityClasses = (ownerState: HeroProps): Record<HeroClassKey, string> => {
    const { classes } = ownerState;
    const slots = {
        root: ['root'],
        icon: ['icon'],
        label: ['label'],
        values: ['values'],
    };

    return composeClasses(slots, getHeroUtilityClass, classes);
};

const normalizeIconSize = (size: number): number => Math.max(10, size);

export type HeroProps = BoxProps & {
    /** Custom classes for default style overrides */
    classes?: HeroClasses;
    /** The primary icon */
    icon: ReactNode;
    /** The color used behind the primary icon
     *
     * Default: 'transparent
     */
    iconBackgroundColor?: string;
    /** The size of the primary icon (min 10px)
     *
     * Default: 36
     */
    iconSize?: number | string;
    /** The text shown below the `ChannelValue` */
    label: string;
    /** Props to be passed through to ChannelValue child component */
    ChannelValueProps?: ChannelValuePropsType;
};

const Root = styled(Box, { name: 'hero', slot: 'root' })<Pick<HeroProps, 'onClick'>>(({ onClick, theme }) => ({
    fontSize: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: '1 1 0px',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    padding: `1rem ${theme.spacing()}`,
    cursor: onClick ? 'pointer' : 'inherit',
}));

const Icon = styled(Box, { name: 'hero', slot: 'icon' })<Pick<HeroProps, 'iconSize' | 'iconBackgroundColor'>>(
    ({ iconSize, iconBackgroundColor, theme }) => ({
        lineHeight: 1,
        color: theme.palette.text.secondary,
        marginBottom: '.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        padding: `.25rem ${theme.spacing(0.5)}`,
        borderRadius: '50%',
        fontSize: typeof iconSize === 'number' ? normalizeIconSize(iconSize) : iconSize,
        height: typeof iconSize === 'number' ? Math.max(44, iconSize) : iconSize,
        width: typeof iconSize === 'number' ? Math.max(44, iconSize) : iconSize,
        backgroundColor: iconBackgroundColor,
    })
);

const Values = styled(Box, { name: 'hero', slot: 'values' })(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    maxWidth: '100%',
    overflow: 'hidden',
    fontSize: '1.25rem',
}));

const Label = styled(Typography, { name: 'hero', slot: 'values' })(() => ({
    fontSize: 'inherit',
    lineHeight: 1.2,
    letterSpacing: 0,
    fontWeight: 600,
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));

const HeroRender: React.ForwardRefRenderFunction<unknown, HeroProps> = (props: HeroProps, ref: any) => {
    const defaultClasses = useUtilityClasses(props);
    const {
        classes,
        className: userClassName,
        icon,
        label,
        ChannelValueProps,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        iconBackgroundColor,
        iconSize,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherProps
    } = props;

    return (
        <Root
            ref={ref}
            className={cx(defaultClasses.root, classes.root, userClassName)}
            data-test={'wrapper'}
            {...otherProps}
        >
            <Icon
                className={cx(defaultClasses.icon, classes.icon)}
                iconSize={iconSize}
                iconBackgroundColor={iconBackgroundColor}
            >
                {icon}
            </Icon>
            <Values  component={'span'} className={cx(defaultClasses.values, classes.values)}>
                {!props.children && ChannelValueProps?.value && (
                    <ChannelValue fontSize={ChannelValueProps?.fontSize} {...ChannelValueProps} />
                )}
                {props.children}
            </Values>
            <Label variant={'body1'}  component={'span'} color={'inherit'} className={cx(defaultClasses.label, classes.label)}>
                {label}
            </Label>
        </Root>
    );
};
/**
 * [Hero](https://brightlayer-ui-components.github.io/react/?path=/info/components-hero--get-read-me-story) component
 *
 * The `<Hero>` component displays a particular icon, value/units, and a label. The icon property will accept any valid component - this will typically be a Material icon, [Brightlayer UI icon](https://github.com/brightlayer-ui/icons), or [Progress Icon](https://github.com/brightlayer-ui/icons/tree/master/progress). It will also accept Text/Emoji values.
 */
export const Hero = React.forwardRef(HeroRender);

Hero.displayName = 'Hero';
Hero.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        values: PropTypes.string,
        icon: PropTypes.string,
        labels: PropTypes.string,
    }),
    icon: PropTypes.node.isRequired,
    iconBackgroundColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string.isRequired,
};
Hero.defaultProps = {
    classes: {},
    iconBackgroundColor: 'transparent',
    iconSize: 36,
};
