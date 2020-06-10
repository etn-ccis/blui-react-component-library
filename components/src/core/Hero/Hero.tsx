import React, { HTMLAttributes } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ChannelValue } from '../ChannelValue';
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
    classes?: HeroClasses;
    icon: string | JSX.Element;
    iconBackgroundColor?: string;
    iconSize?: number;
    label: string;
    value?: string | number;
    valueIcon?: JSX.Element;
    units?: string;
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
            padding: `${theme.spacing(2)}px ${theme.spacing()}px`,
            cursor: (props: HeroProps): 'pointer' | 'inherit' => (props.onClick ? 'pointer' : 'inherit'),
        },
        icon: {
            lineHeight: 1,
            color: theme.palette.text.secondary,
            marginBottom: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            padding: theme.spacing(0.5),
            borderRadius: '50%',
            fontSize: (props: HeroProps): number => normalizeIconSize(props.iconSize),
            height: (props: HeroProps): number => Math.max(44, props.iconSize),
            width: (props: HeroProps): number => Math.max(44, props.iconSize),
            backgroundColor: (props: HeroProps): string => props.iconBackgroundColor,
        },
        values: {
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.text.primary,
            lineHeight: 1.2,
            maxWidth: '100%',
            overflow: 'hidden',
            fontSize: '1.25rem',
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

export const Hero = (props: HeroProps): JSX.Element => {
    const defaultClasses = useStyles(props);
    const {
        classes,
        icon,
        label,
        value,
        valueIcon,
        units,
        // leaving those here to allow prop transferring
        iconBackgroundColor /* eslint-disable-line @typescript-eslint/no-unused-vars */,
        iconSize /* eslint-disable-line @typescript-eslint/no-unused-vars */,
        ...otherDivProps
    } = props;

    return (
        <div className={clsx(defaultClasses.root, classes.root)} data-test={'wrapper'} {...otherDivProps}>
            <span className={clsx(defaultClasses.icon, classes.icon)}>{icon}</span>
            <span className={clsx(defaultClasses.values, classes.values)}>
                {!props.children && value && <ChannelValue value={value} units={units} icon={valueIcon} />}
                {props.children}
            </span>
            <Typography variant={'subtitle1'} color={'inherit'} className={clsx(defaultClasses.label, classes.label)}>
                {label}
            </Typography>
        </div>
    );
};

Hero.displayName = 'Hero';
Hero.propType = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        values: PropTypes.string,
        icon: PropTypes.string,
        labels: PropTypes.string,
    }),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    iconBackgroundColor: PropTypes.string,
    iconSize: PropTypes.number,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    valueIcon: PropTypes.element,
    units: PropTypes.string,
};
Hero.defaultProps = {
    classes: {},
    iconBackgroundColor: 'transparent',
    iconSize: 36,
};
