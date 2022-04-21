import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
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
     * Default: theme.palette.primary.main
     */
    backgroundColor?: string;

    /** Color of the label text
     *
     * Default: theme.palette.primary.contrastText
     */
    fontColor?: string;

    /** The label text */
    label: string;
};

// See https://material-ui.com/guides/right-to-left/#opting-out-of-rtl-transformation
declare module '@mui/styles/withStyles' {
    // Augment the BaseCSSProperties so that we can control jss-rtl
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface BaseCSSProperties {
        /**
         * Used to control if the rule-set should be affected by rtl transformation
         */
        flip?: boolean;
    }
}

const Root = styled(Typography, {
    name: 'list-item-tag',
    slot: 'root',
    shouldForwardProp: (prop) => prop !== 'fontColor',
})<Pick<ListItemTagProps, 'backgroundColor' | 'fontColor' | 'onClick' | 'variant'>>(
    ({ backgroundColor, fontColor, onClick, theme }) => ({
        flip: false, // letter-spacing doesn't flip for RTL, so neither shall our padding hack to offset it
        borderRadius: '0.125rem',
        padding: 0,
        paddingLeft: '0.5rem',
        paddingRight: `calc(0.5rem - 1px)`, // to account for extra pixel from letter-spacing
        overflow: 'hidden',
        display: 'inline-block',
        cursor: onClick ? 'pointer' : 'inherit',
        backgroundColor:
            backgroundColor ||
            (theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main),
        color:
            fontColor ||
            theme.palette.getContrastText(
                backgroundColor ||
                    (theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main)
            ),
        [`&.${listItemTagClasses.noVariant}`]: {
            fontWeight: 700, // bold
            letterSpacing: 1,
            fontSize: `0.625rem`,
            lineHeight: `1rem`,
            height: `1rem`,
        },
    })
);

const ListItemTagRender: React.ForwardRefRenderFunction<unknown, ListItemTagProps> = (
    props: ListItemTagProps,
    ref: any
) => {
    const { classes: userClasses, label, variant, className: userClassName, ...otherTypographyProps } = props;
    const defaultClasses = useUtilityClasses(props);
    const { root: rootUserClass, ...otherUserClasses } = userClasses;
    return (
        <Root
            ref={ref}
            variant={variant || 'overline'}
            className={cx(defaultClasses.root, { [defaultClasses.noVariant]: !variant }, userClassName)}
            classes={{ root: rootUserClass, ...otherUserClasses }}
            data-test={'list-item-tag'}
            {...otherTypographyProps}
        >
            {label}
        </Root>
    );
};
/**
 * [ListItemTag](https://brightlayer-ui-components.github.io/react/?path=/info/components-list-item-tag--get-read-me-story) component
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
