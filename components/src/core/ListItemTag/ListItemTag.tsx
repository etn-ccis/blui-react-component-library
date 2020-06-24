import { Typography, TypographyProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export type ListItemTagProps = {
    /* Color of the label background. Default is theme.palette.primary.main */
    backgroundColor?: string;

    /* Color of the label. Default is theme.palette.primary.contrastText. */
    fontColor?: string;

    /* The string label of the tag. */
    label: string;
} & TypographyProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontWeight: 'bold',
            letterSpacing: 1,
            borderRadius: theme.spacing(0.25),
            padding: 0,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            lineHeight: 'inherit',
            overflow: 'hidden',
            backgroundColor: (props: ListItemTagProps): string => props.backgroundColor || theme.palette.primary.main,
            color: (props: ListItemTagProps): string => props.fontColor || theme.palette.primary.contrastText,
            cursor: (props: ListItemTagProps): string => (props.onClick ? 'pointer' : 'inherit'),
        },
    })
);

export const ListItemTag: React.FC<ListItemTagProps> = (props) => {
    const {
        classes: userClasses,
        label,
        // leaving those here to allow prop transferring
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
            classes={{ root: clsx(defaultClasses.root, rootUserClass), ...otherUserClasses }}
            data-test={'list-item-tag'}
            {...otherTypographyProps}
        >
            {label}
        </Typography>
    );
};

ListItemTag.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
};
ListItemTag.defaultProps = {
    noWrap: true,
    variant: 'overline',
    display: 'inline',
    classes: {},
};
ListItemTag.displayName = 'ListItemTag';
