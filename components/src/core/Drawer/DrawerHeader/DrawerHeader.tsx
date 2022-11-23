import React, { ReactNode, useCallback } from 'react';
import PropTypes from 'prop-types';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useDrawerContext } from '../DrawerContext';
import drawerHeaderClasses, {
    DrawerHeaderClasses,
    DrawerHeaderClassKey,
    getDrawerHeaderUtilityClass,
} from './DrawerHeaderClasses';
import { cx } from '@emotion/css';
import clsx from 'clsx';
import { styled, SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: DrawerHeaderProps): Record<DrawerHeaderClassKey, string> => {
    const { classes } = ownerState;
    const slots = {
        root: ['root'],
        background: ['background'],
        content: ['content'],
        navigation: ['navigation'],
        nonClickable: ['nonClickable'],
        nonClickableIcon: ['nonClickableIcon'],
        railIcon: ['railIcon'],
        subtitle: ['subtitle'],
        title: ['title'],
    };

    return composeClasses(slots, getDrawerHeaderUtilityClass, classes);
};

export type DrawerHeaderProps = ToolbarProps & {
    /** The color used for the background */
    backgroundColor?: string;
    /** An image to display in the header */
    backgroundImage?: string;
    /** The opacity of the background image
     *
     *  Default: 0.3
     */
    backgroundOpacity?: number;
    /** Custom classes for default style overrides */
    classes?: DrawerHeaderClasses;
    /** Optional divider which appears beneath header */
    divider?: boolean;
    /** The color of the text elements
     *
     *  Default: false
     */
    fontColor?: string;
    /** A component to render for the icon  */
    icon?: ReactNode;
    /** A function to execute when the icon is clicked
     *
     * Default: `() => {}`
     */
    onIconClick?: () => void;
    /** The text to show on the second line */
    subtitle?: string;
    /** The text to show on the first line */
    title?: string;
    /** Custom content for header title area */
    titleContent?: ReactNode;
    /** Optional sx props to apply style overrides */
    sx?: SxProps<Theme>;
};

const Root = styled(Toolbar, {
    name: 'drawer-header',
    slot: 'root',
    shouldForwardProp: (prop) => !['backgroundColor', 'fontColor'].includes(prop.toString()),
})<Pick<DrawerHeaderProps, 'backgroundColor' | 'fontColor'>>(({ backgroundColor, fontColor, theme }) => ({
    width: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    minHeight: `4rem`,
    [theme.breakpoints.down('sm')]: {
        minHeight: `3.5rem`,
    },
    backgroundColor:
        backgroundColor || (theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main),
    color:
        fontColor ||
        theme.palette.getContrastText(
            backgroundColor || (theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main)
        ),
    [`& .${drawerHeaderClasses.nonClickable}`]: {},
    [`& .${drawerHeaderClasses.railIcon}`]: {
        marginLeft: theme.spacing(0.5),
        minWidth: 'calc(3.5rem + 16px)',
        justifyContent: 'center',
        [`&.${drawerHeaderClasses.nonClickable}`]: {
            marginLeft: 0,
        },
    },
}));

const Background = styled(Box, {
    name: 'drawer-header',
    slot: 'background',
    shouldForwardProp: (prop) => !['backgroundImage', 'backgroundOpacity'].includes(prop.toString()),
})<Pick<DrawerHeaderProps, 'backgroundImage' | 'backgroundOpacity'>>(({ backgroundImage, backgroundOpacity }) => ({
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    backgroundSize: 'cover',
    height: '100%',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImage})`,
    opacity: backgroundOpacity,
}));

const Navigation = styled(Box, { name: 'drawer-header', slot: 'navigation' })(({ theme }) => ({
    marginLeft: theme.spacing(2),
    minWidth: '2.5rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
}));

const Content = styled(Box, { name: 'drawer-header', slot: 'content' })(({ theme }) => ({
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: 'calc(100% - 2.5rem - 32px)',
    boxSizing: 'border-box',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
        minHeight: `3.5rem`,
    },
}));

const Title = styled(Typography, { name: 'drawer-header', slot: 'title' })(() => ({
    fontWeight: 600,
    lineHeight: '1.6rem', // Anything lower than 1.6rem cuts off bottom text of 'g' or 'y'.
}));

const Subtitle = styled(Typography, { name: 'drawer-header', slot: 'subtitle' })(() => ({
    lineHeight: '1.2rem', // Anything lower than 1.2rem cuts off bottom text of 'g' or 'y'.
    marginTop: '-0.125rem',
}));

const NonClickableIcon = styled(Box, { name: 'drawer-header', slot: 'non-clickable-icon' })(() => ({
    display: 'flex',
    padding: 0,
}));

const DrawerHeaderRender: React.ForwardRefRenderFunction<unknown, DrawerHeaderProps> = (
    props: DrawerHeaderProps,
    ref: any
) => {
    const defaultClasses = useUtilityClasses(props);
    const {
        backgroundImage,
        classes,
        divider,
        icon,
        onIconClick,
        subtitle,
        title,
        titleContent,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        backgroundOpacity,
        fontColor,
        disableGutters = true,
        sx,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherToolbarProps
    } = props;

    const { variant = 'persistent', condensed = false } = useDrawerContext();

    const getHeaderContent = useCallback(
        (): ReactNode =>
            titleContent || (
                <Content className={cx(defaultClasses.content, classes.content)}>
                    <Title
                        noWrap
                        variant={'h6'}
                        className={cx(defaultClasses.title, classes.title)}
                        data-test={'drawer-header-title'}
                    >
                        {title}
                    </Title>

                    {subtitle && (
                        <Subtitle
                            noWrap
                            variant={'body2'}
                            className={cx(defaultClasses.subtitle, classes.subtitle)}
                            data-test={'drawer-header-subtitle'}
                        >
                            {subtitle}
                        </Subtitle>
                    )}
                </Content>
            ),
        [defaultClasses, classes, title, subtitle, titleContent]
    );

    const getBackgroundImage = useCallback(
        (): JSX.Element | null =>
            backgroundImage ? (
                <Background
                    className={cx(defaultClasses.background, classes.background)}
                    backgroundImage={backgroundImage}
                    backgroundOpacity={backgroundOpacity}
                />
            ) : null,
        [backgroundImage, defaultClasses, classes]
    );

    return (
        <>
            <Root
                ref={ref}
                className={cx(defaultClasses.root, classes.root)}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
                disableGutters={disableGutters}
                sx={sx}
                {...otherToolbarProps}
            >
                {getBackgroundImage()}
                {icon && (
                    <Navigation
                        className={clsx(defaultClasses.navigation, classes.navigation, {
                            [defaultClasses.railIcon]: variant === 'rail' && !condensed,
                            [classes.railIcon]: variant === 'rail' && !condensed && classes.railIcon,
                            [defaultClasses.nonClickable]: variant === 'rail' && !condensed && !onIconClick,
                        })}
                    >
                        {onIconClick && (
                            <IconButton
                                color={'inherit'}
                                onClick={(): void => {
                                    onIconClick();
                                }}
                                edge={'start'}
                                size={'large'}
                            >
                                {icon}
                            </IconButton>
                        )}
                        {!onIconClick && (
                            <NonClickableIcon className={cx(defaultClasses.nonClickableIcon, classes.nonClickableIcon)}>
                                {icon}
                            </NonClickableIcon>
                        )}
                    </Navigation>
                )}
                {getHeaderContent()}
            </Root>
            {divider && <Divider />}
        </>
    );
};
/**
 * [DrawerHeader](https://brightlayer-ui-components.github.io/react/components/drawer-header) component
 *
 * The `<DrawerHeader>` contains the content at the top of the `<Drawer>`. By default, it renders multiple lines of text in the Brightlayer UI style. If you supply a `titleContent`, you can render your own custom content in the title area.
 */
export const DrawerHeader = React.forwardRef(DrawerHeaderRender);

DrawerHeader.displayName = 'DrawerHeader';
DrawerHeader.defaultProps = {
    backgroundOpacity: 0.3,
    classes: {},
    divider: false,
};
DrawerHeader.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundOpacity: PropTypes.number,
    classes: PropTypes.shape({
        root: PropTypes.string,
        background: PropTypes.string,
        content: PropTypes.string,
        navigation: PropTypes.string,
        nonClickableIcon: PropTypes.string,
        railIcon: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
    }),
    divider: PropTypes.bool,
    fontColor: PropTypes.string,
    icon: PropTypes.element,
    onIconClick: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleContent: PropTypes.element,
};
