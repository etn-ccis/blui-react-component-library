import React, { useEffect, Fragment } from 'react';
// @ts-ignore
import { withRouter } from 'react-router-dom';

// @ts-ignore
function ScrollToTop({ history, children }): any {
    useEffect(() => {
        // @ts-ignore
        const unlisten = history.listen(() => {
            console.log('scrolling the window');
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    // @ts-ignore
    return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);

//https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition