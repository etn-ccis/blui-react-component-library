import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const updateTitle = (): void => {
    setTimeout(() => {
        window.top.document.title = 'PX Blue | React Components';
    }, 10);
    (function() {
        var link = window.top.document.querySelector("link[rel*='icon']") || document.createElement('link');
        // @ts-ignore
        link.type = 'image/x-icon';
        // @ts-ignore
        link.rel = 'shortcut icon';
        // @ts-ignore
        link.href = './pxblue.png';
        window.top.document.getElementsByTagName('head')[0].appendChild(link);
    })();
};

let prevUrl = '';
export const storyWrapper = (storyFn: any) => {
    const currentUrl = window.location.href;
    const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
    banner.setAttribute('style', 'display: unset');


    // If we are changing stories, default to Canvas tab.
    if (prevUrl.includes('/story/') && currentUrl.includes('/info/')
       || prevUrl.includes('/info/') && currentUrl.includes('/story/')) {
        //  window.top.history.replaceState(null, '', window.top.location.href.replace('/info/', '/story/'));
        //@ts-ignore
        // banner.children[0].children[0].children[0].children[0].click(); // Click the 'Canvas' button
    }
    updateTitle();
    prevUrl = currentUrl;
    return <>{storyFn()}</>;
};

export const getReadMe = (): StoryFnReactReturnType => {
    const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
    banner.setAttribute('style', 'display: none');
    // If we are currently on the Canvas tab, go to Notes tab.
    if (window.top.location.href.includes('/story/')) {
        window.top.history.replaceState(null, '', window.top.location.href.replace('/story/', '/info/'));
        (banner.children[0].children[0].children[0].children[1] as HTMLElement).click(); // click the Notes tab.
    }
    return <></>;
};
getReadMe.story = { name: 'ReadMe' };

export const storyParams = {
    options: {
        showPanel: true,
    },
    notes: {},
};
