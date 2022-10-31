import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = (): any => {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        // if an anchor link is present, scroll to the anchor link;
        // else scroll the page to the top

        if (hash) {
            const id = hash.replace('#', '');
            const headline = document.getElementById(id);
            if (headline) {
                window.scrollTo(0, headline.offsetTop);
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};
