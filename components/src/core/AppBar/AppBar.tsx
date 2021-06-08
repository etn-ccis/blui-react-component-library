import React, { useCallback, useEffect, useState } from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    createStyles,
    makeStyles,
    Theme,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
// import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import clsx from 'clsx';
import { usePrevious } from '../hooks/usePrevious';

export type AppBarClasses = {
    root?: string;
    background?: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: 'hidden',
            transition: (props: AppBarProps): string =>
                theme.transitions.create(['height'], {
                    duration: props.animationDuration || theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                }),
        },
        background: {
            position: 'absolute',
            zIndex: -1,
            width: '100%',
            backgroundSize: 'cover',
            height: '100%',
            opacity: (props: AppBarProps): number => props.backgroundImageOpacity || 0.3,
            backgroundPosition: 'center bottom',
            backgroundImage: (props: AppBarProps): string => `url(${props.backgroundImage})`,
        },
    })
);

export type AppBarProps = MuiAppBarProps & {
    /**
     * Length of the collapse / expand animation (in ms)
     * Default: 300
     */
    animationDuration?: number;

    /**
     * Image to use as the background for the header
     * Default: none
     */
    backgroundImage?: string;

    /**
     * Opacity to use for the header background image
     * Default: 0.3
     */
    backgroundImageOpacity?: number;

    /**
     * Custom classes to add to app bar elements
     * Default: none
     */
    classes?: Partial<AppBarClasses>;

    /**
     * Height of the App Bar when fully collapsed
     * Default: 64 desktop, 56 mobile
     */
    collapsedHeight?: number;

    /**
     * Height of the App Bar when fully expanded
     * Default: 200
     */
    expandedHeight?: number;

    /**
     * Current mode of the app bar:
     * - 'expanded' locks the app bar at the expandedHeight,
     * - 'collapsed' locks it at the collapsedHeight,
     * - 'dynamic' resizes the toolbar based on the window scroll position.
     * Default: dynamic
     */
    mode?: 'expanded' | 'collapsed' | 'dynamic';

    /**
     * How far to scroll before collapsing the app bar
     * Default: 50
     */
    scrollThreshold?: number;

    /**
     * A ref to the scrollable container that controls the app bar height
     * Default: window
     * TODO: NOT IMPLEMENTED YET
     */
    // scrollRef?: MutableRefObject<any>;

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
    const {
        style = {},
        mode = 'dynamic',
        animationDuration: durationProp,
        expandedHeight = 200,
        backgroundImage,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        backgroundImageOpacity,
        classes = {},
        collapsedHeight: collapsedHeightProp,
        // onExpandedHeightReached,
        // onCollapsedHeightReached,
        scrollThreshold = 100,
        ...muiAppBarProps
    } = props;
    const theme = useTheme();
    const defaultClasses = useStyles(props);
    const animationDuration = durationProp || theme.transitions.duration.standard;
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const defaultAppBarHeight = isMobile ? theme.spacing(7) : theme.spacing(8);
    const collapsedHeight = collapsedHeightProp || defaultAppBarHeight;

    const [offset, setOffset] = useState(0);
    const previousOffset = usePrevious(offset);
    const [scrolling, setScrolling] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [height, setHeight] = useState(
        mode === 'collapsed'
            ? collapsedHeight
            : mode === 'expanded'
            ? expandedHeight
            : window.scrollY > scrollThreshold
            ? collapsedHeight
            : expandedHeight
    );

    useEffect(() => {
        if (animating || mode !== 'dynamic') return;

        if (previousOffset < scrollThreshold && offset >= scrollThreshold) {
            setAnimating(true);
            setHeight(collapsedHeight);
            setTimeout(() => {
                setAnimating(false);
                setScrolling(false);
                if (window.scrollY === 0) {
                    window.scrollTo(0, 1);
                }
            }, animationDuration + 50);
        }
        // go from small to big if we scroll back to the top
        else if (previousOffset > 0 && offset === 0) {
            setAnimating(true);
            setHeight(expandedHeight);
            setTimeout(() => {
                setAnimating(false);
                setScrolling(false);
            }, animationDuration + 50);
        }
    }, [animationDuration, animating, previousOffset, collapsedHeight, expandedHeight, offset, scrollThreshold]);

    const getBackgroundImage = useCallback((): JSX.Element | undefined => {
        if (backgroundImage) {
            return <div className={clsx(defaultClasses.background, classes.background)} />;
        }
    }, [backgroundImage, defaultClasses, classes]);

    const handleScroll = useCallback(() => {
        if (scrolling && !animating) {
            setScrolling(false);
            if (window.scrollY !== offset) {
                setOffset(window.scrollY);
            }
        }
    }, [scrolling, animating, offset]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolling(true);
        });
        const scrollCheck = setInterval(handleScroll, 50);
        return (): void => {
            clearInterval(scrollCheck);
            window.removeEventListener('scroll', () => setScrolling(true));
        };
    }, [handleScroll]);

    return (
        <>
            <MuiAppBar
                ref={ref}
                {...muiAppBarProps}
                className={clsx(defaultClasses.root, classes.root)}
                style={Object.assign({}, style, {
                    height: height,
                    overflow: 'hidden',
                })}
                position={'sticky'}
            >
                {getBackgroundImage()}
                {props.children}
            </MuiAppBar>
        </>
    );
};
export const AppBar = React.forwardRef(AppBarRender);
AppBar.displayName = 'AppBar';

/* Additional code from the work on the continuous scrolling app bar that worked
but did ot perform well with complex toolbars or applications. */

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
