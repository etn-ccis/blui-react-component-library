import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled, useColorScheme } from '@mui/material/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import listItemTagClasses, { ListItemTagClassKey, getListItemTagUtilityClass } from './ListItemTagClasses';
import { cx } from '@emotion/css';

const useUtilityClasses = (ownerState: ListItemTagProps): Record<ListItemTagClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        noVariant: ['noVariant'],
    };

    return composeClasses(slots, getListItemTagUtilityClass, classes);
};

export type ListItemTagProps = TypographyProps & {
    /** Color of the label background
     *
     * Default: theme.vars.palette.primary.main
     */
    backgroundColor?: string;

    /** Color of the label text
     *
     * Default: theme.vars.palette.primary.contrastText
     */
    fontColor?: string;

    /** The label text */
    label: string;
};

// This `styled()` function invokes @noflip. `styled-components` only supports @noflip in string templates.
// Do not convert these styles to a JS object as it will break.
// @noflip is used to stop certain styles from flipping when the language direction is toggled.

const Root = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'fontColor',
})<Pick<ListItemTagProps, 'backgroundColor' | 'fontColor' | 'onClick' | 'variant'>>(
    ({ backgroundColor, fontColor, onClick, theme }) => {
        const colorScheme = useColorScheme();

        return `
            border-radius: 0.125rem;
            padding: 0;
            /* @noflip */
            padding-left: 0.25rem;
            /* @noflip */
            padding-right: calc(0.25rem - 1px); // to account for extra pixel from letter-spacing
            overflow: hidden;
            display: inline-block;
            cursor: ${onClick ? 'pointer' : 'inherit'};
            background-color:
                ${
                    backgroundColor ||
                    (colorScheme.mode === 'dark' ? theme.vars.palette.primary.dark : theme.vars.palette.primary.main)
                };
            color:
                ${
                    fontColor ||
                    theme.palette.getContrastText(
                        backgroundColor ||
                            (colorScheme.mode === 'dark'
                                ? theme.vars.palette.primary.dark
                                : theme.vars.palette.primary.main)
                    )
                };
            &.${listItemTagClasses.noVariant} {
                font-weight: 700; // bold
                letter-spacing: 1px;
                font-size: 0.625rem;
                line-height: 1rem;
                height: 1rem;
            },`;
    }
);

const ListItemTagRender: React.ForwardRefRenderFunction<unknown, ListItemTagProps> = (
    props: ListItemTagProps,
    ref: any
) => {
    const { classes: userClasses, label, variant, className: userClassName, ...otherTypographyProps } = props;
    const generatedClasses = useUtilityClasses(props);
    const { root: rootUserClass, ...otherUserClasses } = userClasses;
    return (
        <Root
            ref={ref}
            variant={variant || 'overline'}
            className={cx(generatedClasses.root, { [generatedClasses.noVariant]: !variant }, userClassName)}
            classes={{ root: rootUserClass, ...otherUserClasses }}
            data-testid={'blui-list-item-tag'}
            {...otherTypographyProps}
        >
            {label}
        </Root>
    );
};
/**
 * [ListItemTag](https://brightlayer-ui-components.github.io/react/components/list-item-tag) component
 *
 * `<ListItemTag>` is a text item with a colored background and rounded corners that is used to tag lists.
 */
export const ListItemTag = React.forwardRef(ListItemTagRender);

ListItemTag.propTypes = {
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
};
ListItemTag.defaultProps = {
    noWrap: true,
    display: 'inline',
    classes: {},
};
ListItemTag.displayName = 'ListItemTag';
