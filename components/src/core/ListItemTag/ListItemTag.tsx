import { Typography, TypographyProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type ListItemTagProps = TypographyProps & {
    /* Color of the label background. Default is theme.palette.primary.main */
    backgroundColor?: string;

    /* Color of the label. Default is theme.palette.primary.contrastText. */
    fontColor?: string;

    /* The string label of the tag. */
    label: string;
};

// See https://material-ui.com/guides/right-to-left/#opting-out-of-rtl-transformation
declare module '@material-ui/core/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface BaseCSSProperties {
        /**
         * Used to control if the rule-set should be affected by rtl transformation
         */
        flip?: boolean;
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: theme.spacing(0.25),
            padding: 0,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5) - 1, // to account for extra pixel from letter-spacing
            overflow: 'hidden',
            backgroundColor: (props: ListItemTagProps): string =>
                props.backgroundColor ||
                (theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main),
            color: (props: ListItemTagProps): string =>
                props.fontColor ||
                theme.palette.getContrastText(
                    props.backgroundColor ||
                        (theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main)
                ),
            cursor: (props: ListItemTagProps): string => (props.onClick ? 'pointer' : 'inherit'),
            display: 'inline-block',
            flip: false, // letter-spacing doesn't flip for RTL, so neither shall our padding hack to offset it
        },
        noVariant: {
            fontWeight: 700, // bold
            letterSpacing: 1,
            fontSize: 10,
            lineHeight: '16px',
            height: 16,
        },
    })
);

const ListItemTagRender: React.ForwardRefRenderFunction<unknown, ListItemTagProps> = (
    props: ListItemTagProps,
    ref: any
) => {
    const {
        classes: userClasses,
        label,
        variant,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        fontColor,
        backgroundColor,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherTypographyProps
    } = props;
    const defaultClasses = useStyles(props);
    const { root: rootUserClass, ...otherUserClasses } = userClasses;
    return (
        <Typography
            ref={ref}
            classes={{
                root: clsx(defaultClasses.root, rootUserClass, { [defaultClasses.noVariant]: !variant }),
                ...otherUserClasses,
            }}
            variant={variant || 'overline'}
            data-test={'list-item-tag'}
            {...otherTypographyProps}
        >
            {label}
        </Typography>
    );
};

export const ListItemTag = React.forwardRef(ListItemTagRender);

ListItemTag.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
};
ListItemTag.defaultProps = {
    noWrap: true,
    display: 'inline',
    classes: {},
};
ListItemTag.displayName = 'ListItemTag';
