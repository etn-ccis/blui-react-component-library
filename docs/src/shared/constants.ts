export const DRAWER_WIDTH = 300;
export const PLAYGROUND_DRAWER_WIDTH = 375;

export const PADDING = 24;

export const PAGE_WIDTH = {
    WIDE: 1280, // medias, components
    REGULAR: 766 + PADDING * 2, // text
};

export const CTA_BUTTON = {
    WIDTH: 320 - PADDING * 2,
    HEIGHT: 154,
};

export const REGULAR_WIDTH_STYLE = {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: PAGE_WIDTH.REGULAR,
};

export const DOCS_BRANCH = process.env.REACT_APP_BRANCH || 'master'; // default to master if there is no value
