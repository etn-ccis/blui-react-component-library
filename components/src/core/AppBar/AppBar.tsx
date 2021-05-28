import React, { /*useEffect,*/ useState } from 'react';
import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, useMediaQuery, useTheme } from '@material-ui/core';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

export type AppBarProps = MuiAppBarProps & {
    /**
     * Height of the App Bar when fully expanded
     * Default: 200
     */
    expandedHeight?: number;

    /**
     * Height of the App Bar when fully collapsed
     * Default: 64 desktop, 56 mobile
     */
    collapsedHeight?: number;

    /**
     * A ref to the scrollable container that controls the app bar height
     * Default: window
     * TODO: NOT IMPLEMENTED YET
     */
    // scrollRef?: MutableRefObject<any>;

    /**
     * Current mode of the app bar:
     * - 'expanded' locks the app bar at the expandedHeight,
     * - 'collapsed' locks it at the collapsedHeight,
     * - 'dynamic' resizes the toolbar based on the window scroll position.
     * Default: dynamic
     */
    mode?: 'expanded' | 'collapsed' | 'dynamic';

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
        expandedHeight = 200,
        collapsedHeight: collapsedHeightProp,
        // onExpandedHeightReached,
        // onCollapsedHeightReached,
        ...muiAppBarProps
    } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const [offset, setOffset] = useState(0);

    // Calculate the correct App Bar size
    const defaultAppBarHeight = isMobile ? theme.spacing(7) : theme.spacing(8);
    const collapsedHeight = collapsedHeightProp || defaultAppBarHeight;
    const calculatedHeight =
        mode === 'collapsed'
            ? collapsedHeight
            : mode === 'expanded'
            ? expandedHeight
            : Math.max(expandedHeight - offset, collapsedHeight);
    const calculatedMargin = mode === 'dynamic' ? expandedHeight - calculatedHeight : 0;
    const calculatedPosition =
        mode === 'dynamic' ? (calculatedHeight <= collapsedHeight ? 'sticky' : 'static') : props.position;

    // Update the height based on scroll position of WINDOW
    useScrollPosition(
        ({ currPos }) => {
            if (mode === 'dynamic') setOffset(currPos.y);
        },
        [offset, setOffset, mode],
        undefined,
        true
    );

    // Handle callback functions when reaching the extremes of dynamic app bar
    // useEffect(() => {
    //     if (mode !== 'dynamic') return;
    //     if (calculatedHeight >= expandedHeight && onExpandedHeightReached) onExpandedHeightReached();
    //     if (calculatedHeight <= collapsedHeight && onCollapsedHeightReached) onCollapsedHeightReached();
    // }, [mode, calculatedHeight, expandedHeight, collapsedHeight, onExpandedHeightReached, onCollapsedHeightReached]);

    /*
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
    */

    return (
        <>
            <MuiAppBar
                ref={ref}
                {...muiAppBarProps}
                style={Object.assign(style, { height: calculatedHeight, marginTop: calculatedMargin })}
                position={calculatedPosition}
            >
                {props.children}
            </MuiAppBar>
        </>
    );
};
export const AppBar = React.forwardRef(AppBarRender);
AppBar.displayName = 'AppBar';
