import { Typography, TypographyProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

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
            backgroundColor: theme.palette.primary.main,
            fontWeight: 'bold',
            letterSpacing: 1,
            borderRadius: theme.spacing(0.25),
            padding: 0,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            lineHeight: 'inherit',
            color: theme.palette.primary.contrastText,
            overflow: 'hidden',
        },
    })
);

export const ListItemTag: React.FC<ListItemTagProps> = (props: ListItemTagProps): JSX.Element => {
    const { classes: userClasses = {}, label, fontColor, backgroundColor, style, ...other } = props;
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const { root: rootUserClass, ...otherUserClasses } = userClasses;
    return (
        <Typography
            classes={{ root: clsx(defaultClasses.root, rootUserClass), ...otherUserClasses }}
            style={Object.assign(
                {
                    color: fontColor,
                    backgroundColor: backgroundColor,
                    cursor: props.onClick ? 'pointer' : 'default',
                },
                style
            )}
            data-test={'list-item-tag'}
            {...other}
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
};
