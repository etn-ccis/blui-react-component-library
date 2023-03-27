import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export const GoogleAnalyticsWrapper: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({
            hitType: "window.location.pathname + window.location.search"
        });
    }, [location.pathname, location.search]);

    return null;
};
