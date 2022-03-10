import React, { HTMLAttributes, ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { ChannelValue, ChannelValueProps as ChannelValuePropsType } from '../ChannelValue';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const normalizeIconSize = (size: number): number => Math.max(10, size);

export type HeroClasses = {
    root?: string;
    icon?: string;
    label?: string;
    values?: string;
};

export type HeroProps = HTMLAttributes<HTMLDivElement> & {
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontSize: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: '1 1 0px',
            overflow: 'hidden',
            color: theme.palette.text.primary,
            padding: `1rem ${theme.spacing()}`,
            cursor: (props: HeroProps): 'pointer' | 'inherit' => (props.onClick ? 'pointer' : 'inherit'),
        },
        icon: {
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
            fontSize: (props: HeroProps): number | string =>
                typeof props.iconSize === 'number' ? normalizeIconSize(props.iconSize) : props.iconSize,
            height: (props: HeroProps): number | string =>
                typeof props.iconSize === 'number' ? Math.max(44, props.iconSize) : props.iconSize,
            width: (props: HeroProps): number | string =>
                typeof props.iconSize === 'number' ? Math.max(44, props.iconSize) : props.iconSize,
            backgroundColor: (props: HeroProps): string => props.iconBackgroundColor,
        },
        values: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            lineHeight: 1.2,
            maxWidth: '100%',
            overflow: 'hidden',
        },
        label: {
            fontSize: 'inherit',
            lineHeight: 1.2,
            letterSpacing: 0,
            fontWeight: 600,
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
    })
);

const HeroRender: React.ForwardRefRenderFunction<unknown, HeroProps> = (props: HeroProps, ref: any) => {
    const defaultClasses = useStyles(props);
    const {
        classes,
        icon,
        label,
        ChannelValueProps,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        iconBackgroundColor,
        iconSize,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherDivProps
    } = props;

    return (
        <div ref={ref} className={clsx(defaultClasses.root, classes.root)} data-test={'wrapper'} {...otherDivProps}>
            <span className={clsx(defaultClasses.icon, classes.icon)}>{icon}</span>
            <span className={clsx(defaultClasses.values, classes.values)}>
                {!props.children && ChannelValueProps?.value && <ChannelValue fontSize={20} {...ChannelValueProps} />}
                {props.children}
            </span>
            <Typography variant={'body1'} color={'inherit'} className={clsx(defaultClasses.label, classes.label)}>
                {label}
            </Typography>
        </div>
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
