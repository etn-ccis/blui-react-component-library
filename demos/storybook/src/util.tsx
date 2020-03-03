import React from 'react';

export const updateTitle = (): void => {
    setTimeout(() => {
        window.top.document.title = 'PX Blue | React Components';
    }, 10);
};


export const storyWrapper = (storyFn: any) => {
    const banner = window.top.document.getElementsByClassName('simplebar-content')[1];
    banner.setAttribute('style', 'display: unset');

    // If we are currently on the 'Notes' tab.
    if (window.top.location.href.includes('/info/')) {
        window.top.history.replaceState(null, '', window.top.location.href.replace('/info/', '/story/'));
        //@ts-ignore
        banner.children[0].children[0].children[0].children[0].click(); // Click the 'Canvas' button
    }
    updateTitle();
    return <>{storyFn()}</>;
};
