import React, { useCallback, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import clsx from 'clsx';
import { usePrevious } from '../hooks/usePrevious';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import appBarClasses, { AppBarClasses, AppBarClassKey, getAppBarUtilityClass } from './AppBarClasses';
import { cx } from '@emotion/css';

const useUtilityClasses = (ownerState: AppBarProps): Record<AppBarClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        background: ['background'],
        expanded: ['expanded'],
        collapsed: ['collapsed'],
        expandedBackground: ['expandedBackground'],
    };

    return composeClasses(slots, getAppBarUtilityClass, classes);
};

const Root = styled(MuiAppBar, {
    name: 'app-bar',
    slot: 'root',
})<Pick<AppBarProps, 'animationDuration'>>(({ animationDuration, theme }) => ({
    overflow: 'hidden',
    transition: theme.transitions.create(['height'], {
        duration: animationDuration || theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut,
    }),
    [`& .${appBarClasses.collapsed}`]: {},
    [`& .${appBarClasses.expanded}`]: {},
    [`& .${appBarClasses.expandedBackground}`]: {},
    [`& .${appBarClasses.background}`]: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        opacity: 0.3,
        backgroundPosition: 'center bottom',
        backgroundImage: (props: AppBarProps): string => `url(${props.backgroundImage})`,
        transition: theme.transitions.create(['all'], {
            duration: animationDuration || theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
        }),
    },
}));

export type AppBarProps = Omit<MuiAppBarProps, 'variant'> & {
    /**
     * Length of the collapse / expand animation (in ms)
     *
     * Default: 300
     */
    animationDuration?: number;

    /**
     * Image to use as the background for the header
     *
     * Default: none
     */
    backgroundImage?: string;

    /**
     * Opacity to use for the header background image
     *
     * Default: 0.3
     */

    // backgroundImageOpacity?: number;

    /**
     * Custom classes for default style overrides
     *
     * Default: none
     */
    classes?: Partial<AppBarClasses>;

    /**
     * Height of the App Bar when fully collapsed
     *
     * Default: desktop: 64, mobile: 56
     */
    collapsedHeight?: number | string;

    /**
     * Height of the App Bar when fully expanded
     *
     *  Default: 200
     */
    expandedHeight?: number | string;

    /**
     * Behavior of the app bar:
     * - 'expanded' locks the app bar at the expandedHeight,
     * - 'collapsed' locks it at the collapsedHeight,
     * - 'snap' resizes the toolbar after the window passes a scrollThreshold.
     *
     * Default: snap
     */
    variant?: 'expanded' | 'collapsed' | 'snap';

    /**
     * How far to scroll before collapsing the app bar
     *
     * Default: 136
     */
    scrollThreshold?: number;

    /**
     * An element ID for the scrollable container that controls the app bar height
     *
     * Default: window
     */
    scrollContainerId?: string;

    /**
     * NOT EXPOSED YET
     * Callback when the dynamic toolbar has reached it's expandedHeight
     * Default: none
     */
    // onExpandedHeightReached?: () => void;

    /**
     * NOT EXPOSED YET
     * Callback when the dynamic toolbar has reached it's collapsedHeight
     * Default: none
     */
    // onCollapsedHeightReached?: () => void;
};

const AppBarRender: React.ForwardRefRenderFunction<unknown, AppBarProps> = (props: AppBarProps, ref: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const defaultAppBarHeight = isMobile ? '3.5rem' : '4rem';
    const {
        style = {},
        variant = 'snap',
        animationDuration: durationProp,
        expandedHeight = 200,
        backgroundImage,
        classes = {},
        collapsedHeight = defaultAppBarHeight,
        // onExpandedHeightReached,
        // onCollapsedHeightReached,
        scrollThreshold = 136,
        scrollContainerId,
        ...muiAppBarProps
    } = props;
    const scrollElement = scrollContainerId ? document.getElementById(scrollContainerId) : null;
    const scrollTop = scrollElement ? scrollElement.scrollTop : window.scrollY;

    const defaultClasses = useUtilityClasses(props);
    const animationDuration = durationProp || theme.transitions.duration.standard;

    const [offset, setOffset] = useState(0);
    const previousOffset = usePrevious(offset);
    const previousCollapsedHeight = usePrevious(collapsedHeight);
    const previousExpandedHeight = usePrevious(expandedHeight);
    const [scrolling, setScrolling] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [endScrollHandled, setEndScrollHandled] = useState(false);
    const [height, setHeight] = useState(
        variant === 'collapsed'
            ? collapsedHeight
            : variant === 'expanded'
            ? expandedHeight
            : scrollTop > scrollThreshold
            ? collapsedHeight
            : expandedHeight
    );
    const isExpanded = height === expandedHeight;

    // Smoothly collapse the toolbar to the collapsedHeight
    const collapseToolbar = useCallback(() => {
        setAnimating(true);
        setHeight(collapsedHeight);
        setTimeout(() => {
            setAnimating(false);
            setScrolling(false);
            if (scrollTop === 0) {
                (scrollElement || window).scrollTo(0, 1);
            }
        }, animationDuration + 50);
    }, [collapsedHeight, animationDuration, scrollTop, scrollElement]);

    // Smoothly expand the toolbar to the expandedHeight
    const expandToolbar = useCallback(() => {
        setAnimating(true);
        setHeight(expandedHeight);
        setTimeout(() => {
            setAnimating(false);
            setScrolling(false);
        }, animationDuration + 50);
    }, [expandedHeight, animationDuration]);

    // Adjust the height of the app bar when we cross the scroll thresholds
    useEffect(() => {
        if (animating || variant !== 'snap') return;

        if (previousOffset < scrollThreshold && offset >= scrollThreshold) {
            collapseToolbar();
        }
        // go from small to big if we scroll back to the top
        else if (previousOffset > 0 && offset === 0) {
            expandToolbar();
        }
    }, [offset, scrollThreshold]);

    // Properly update the height whenever the variant property changes
    useEffect(() => {
        if (variant === 'collapsed') {
            collapseToolbar();
        } else if (variant === 'expanded') {
            expandToolbar();
        } else {
            if (offset >= scrollThreshold) {
                collapseToolbar();
            } else {
                expandToolbar();
            }
        }
    }, [variant]);

    // Properly update the size when either height property changes
    useEffect(() => {
        if (previousExpandedHeight === undefined || previousCollapsedHeight === undefined) return;

        const wasExpanded = height === previousExpandedHeight;

        if (!wasExpanded) {
            collapseToolbar();
        } else {
            expandToolbar();
        }
    }, [collapsedHeight, expandedHeight]);

    // Returns the background image to apply on the app bar
    const getBackgroundImage = useCallback((): JSX.Element | undefined => {
        if (backgroundImage) {
            return (
                <div
                    className={clsx(defaultClasses.background, classes.background, {
                        [defaultClasses.expandedBackground]: isExpanded,
                        [classes.expandedBackground]: isExpanded,
                    })}
                />
            );
        }
    }, [backgroundImage, defaultClasses, classes, isExpanded]);

    // This handler checks if the scrolling variable is true and adjusts the offset accordingly
    // We do not do this directly in the scroll event callback for performance reasons
    const handleScroll = useCallback(() => {
        if (scrolling && !animating) {
            setScrolling(false);
            setEndScrollHandled(false);

            if (scrollTop !== offset) {
                setOffset(scrollTop);
            }
        }
        // once the scroll ends, do one more update so we don't miss the latest value due to the debounce
        else if (!endScrollHandled) {
            setOffset(scrollTop);
            setEndScrollHandled(true);
        }
    }, [scrolling, animating, offset, endScrollHandled]);

    // This function listens for scroll events on the window and sets the scrolling variable to true
    useEffect(() => {
        (scrollElement || window).addEventListener('scroll', () => {
            setScrolling(true);
        });
        const scrollCheck = setInterval(handleScroll, 50);
        return (): void => {
            clearInterval(scrollCheck);
            (scrollElement || window).removeEventListener('scroll', () => setScrolling(true));
        };
    }, [handleScroll]);

    return (
        <Root
            ref={ref}
            {...muiAppBarProps}
            className={cx(defaultClasses.root, classes.root, {
                [defaultClasses.expanded]: isExpanded,
                [classes.expanded]: isExpanded,
                [defaultClasses.collapsed]: !isExpanded,
                [classes.collapsed]: !isExpanded,
            })}
            style={Object.assign({}, style, {
                height: height,
                overflow: 'hidden',
            })}
            position={'sticky'}
        >
            {getBackgroundImage()}
            {props.children}
        </Root>
    );
};

/**
 * [Appbar](https://brightlayer-ui-components.github.io/react/?path=/info/components-app-bar--get-read-me-story) component
 *
 * An extension of the default AppBar from Material UI that can be resized / collapsed as the page is scrolled.
 */
export const AppBar = React.forwardRef(AppBarRender);
AppBar.displayName = 'AppBar';

/* Additional code from the work on the continuous scrolling app bar that worked
but did not perform well with complex toolbars or applications. */

// Calculate the correct App Bar size
// const defaultAppBarHeight = isMobile ? theme.spacing(7) : theme.spacing(8);
// const collapsedHeight = collapsedHeightProp || defaultAppBarHeight;
// const calculatedHeight =
//     mode === 'collapsed'
//         ? collapsedHeight
//         : mode === 'expanded'
//             ? expandedHeight
//             : Math.round(Math.max(expandedHeight - offset, collapsedHeight));
// const calculatedMargin = mode === 'dynamic' ? expandedHeight - calculatedHeight : 0;
// const calculatedPosition =
//     mode === 'dynamic' ? (calculatedHeight <= collapsedHeight ? 'sticky' : 'relative') : props.position;

// TODO: This is inefficient...we listen for scroll events even if we are in a mode that doesn't react
// We may need to break this into two sub-components, one with scroll and one without since we can't
// conditionally execute React hooks.
// Update the height based on scroll position of WINDOW
// useScrollPosition(
//     ({ currPos }) => {
//         if (mode === 'dynamic') setOffset(currPos.y);
//     },
//     [offset, setOffset, mode],
//     undefined,
//     true
// );

// Handle callback functions when reaching the extremes of dynamic app bar
// useEffect(() => {
//     if (mode !== 'dynamic') return;
//     if (calculatedHeight >= expandedHeight && onExpandedHeightReached) onExpandedHeightReached();
//     if (calculatedHeight <= collapsedHeight && onCollapsedHeightReached) onCollapsedHeightReached();
// }, [mode, calculatedHeight, expandedHeight, collapsedHeight, onExpandedHeightReached, onCollapsedHeightReached]);

// This works for supporting a custom element scroller, but it's not very pretty
// const handleScroll = useCallback((e: any) => {
//     console.log('scrolling:', scrollRef?.current?.scrollTop);
//     setOffset(scrollRef?.current?.scrollTop);
// }, [setOffset, scrollRef, scrollRef?.current]);
//
// useEffect(() => {
//     if (scrollRef && scrollRef.current) {
//         // @ts-ignore
//         scrollRef?.current?.addEventListener('scroll', handleScroll);
//         // scrollRef?.current?.addEventListener('scroll', (e) => {
//         //     setOffset(scrollRef?.current?.scrollTop);
//         // });
//         return () => scrollRef?.current?.removeEventListener('scroll', handleScroll);
//     }
// }, [scrollRef, scrollRef?.current]);
