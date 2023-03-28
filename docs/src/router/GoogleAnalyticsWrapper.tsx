import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga4';

export const GoogleAnalyticsWrapper: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        window.gtag('event', 'page_view', {
            PAGE_PATH: location.pathname + location.search + location.hash,
            PAGE_SEARCH: location.search,
            PAGE_HASH: location.hash,
        });
    }, [location]);
    return null;
};
