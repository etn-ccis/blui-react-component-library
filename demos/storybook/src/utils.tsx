import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { README_STORY_NAME } from './constants';

const STORY_PATH = '/story/';
const NOTES_PATH = '/info/';
const getBanner = (): HTMLElement => window.top.document.getElementsByClassName('simplebar-content')[1] as HTMLElement;
const setBannerStyle = (display: string): void => getBanner().setAttribute('style', `display: ${display}`);
export const showTopBanner = (): void => setBannerStyle('unset');
export const hideTopBanner = (): void => setBannerStyle('none');

export const selectCanvasTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(NOTES_PATH, STORY_PATH));
    (getBanner().children[0].children[0].children[0].children[0] as HTMLElement).click(); // click the Canvas tab.
};

const selectNotesTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(STORY_PATH, NOTES_PATH));
    (getBanner().children[0].children[0].children[0].children[1] as HTMLElement).click(); // click the Notes tab.
};

const updateNotesTabText = (): void => {
    getBanner().children[0].children[0].children[0].children[1].children[0].innerHTML = 'ReadMe';
};

export const updateTitle = (): void => {
    setTimeout(() => {
        window.top.document.title = 'PX Blue | React Components';
    }, 10);

    const link: any = window.top.document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './pxblue.png';
    window.top.document.getElementsByTagName('head')[0].appendChild(link);
};

let prevUrl = '';
// Auto-navigates the user to the Canvas tab when switching stories.
export const storyWrapper = (storyFn: any): any => {
    const currentUrl = window.top.location.href;
    showTopBanner();
    updateTitle();
    updateNotesTabText();

    const currStoryUrl = currentUrl.replace(STORY_PATH, '').replace(NOTES_PATH, '');
    const prevStoryUrl = prevUrl.replace(STORY_PATH, '').replace(NOTES_PATH, '');

    // If user changed stories while on the Notes tab, but not from the README story.
    if (currStoryUrl !== prevStoryUrl && !currentUrl.includes('get-read-me') && currentUrl.includes(NOTES_PATH)) {
        selectCanvasTab();
    }
    prevUrl = currentUrl;
    return <>{storyFn()}</>;
};

export const getReadMeStory = (): StoryFnReactReturnType => {
    hideTopBanner();
    // If we are currently on the Canvas tab, go to Notes tab.  The README story never shows the Canvas.
    if (window.top.location.href.includes(STORY_PATH)) {
        selectNotesTab();
    }
    return <></>;
};
getReadMeStory.story = { name: README_STORY_NAME };

export const storyParams = {
    options: {
        showPanel: true,
    },
    notes: {},
};
