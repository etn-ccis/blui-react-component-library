export type RangeDataTypes = {
    min: number;
    max: number;
    step: number;
};
export type SiteThemeType = 'light' | 'dark' | 'system';
export type UIDirection = 'ltr' | 'rtl';

export type SiteThemePayloadType = {
    siteTheme: SiteThemeType;
};

export type SiteDirectionPayloadType = {
    siteDirection: UIDirection;
};
