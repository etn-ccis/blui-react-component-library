import React from 'react';

export const storyWrapper = (storyFn: any) => {
    window.top.document.getElementsByClassName('simplebar-content')[1].setAttribute('style', 'display: unset');
    if (window.top.location.href.includes('/info/')) {
        window.top.history.replaceState(null, '', window.top.location.href.replace('/info/', '/story/'));
        //@ts-ignore
        window.top.document.getElementsByClassName('css-mtwlrt')[0].click();
    }
    return <>{storyFn()}</>;
};
