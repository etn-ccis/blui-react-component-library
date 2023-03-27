import ReactGA from 'react-ga4';

export const GoogleAnalyticsWrapper: React.FC = () => {
    ReactGA.send({
        hitType: 'pageview',
    });

    return null;
};
