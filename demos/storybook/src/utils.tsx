import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { COMPONENT_SECTION_NAME, README_STORY_NAME } from './constants';
import { getDirection } from '@pxblue/storybook-rtl-addon';

let banner: HTMLElement;

const STORY_PATH = '/story/';
const NOTES_PATH = '/info/';
const getBanner = (): HTMLElement => {
    if (!banner) {
        banner = window.top.document.getElementsByClassName('simplebar-content')[1] as HTMLElement;
    }
    return banner;
};
const setBannerStyle = (display: string): void => {
    const banner = getBanner();
    if (!banner) return;
    banner.setAttribute('style', `display: ${display}`);
};

export const showTopBanner = (): void => setBannerStyle('initial');
export const hideTopBanner = (): void => setBannerStyle('none');

export const selectCanvasTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(NOTES_PATH, STORY_PATH));
    (getBanner().children[0].children[0].children[0].children[0] as HTMLElement).click(); // click the Canvas tab.
};

const selectNotesTab = (): void => {
    window.top.history.replaceState(null, '', window.top.location.href.replace(STORY_PATH, NOTES_PATH));
    (getBanner().children[0].children[0].children[0].children[1] as HTMLElement).click(); // click the Notes tab.
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

export const getReadMe = (name: string): any => {
    const md = require(`./../../../docs/${name}`);

    // Locate all relative links that use href syntax and replace them with absolute URLs.
    md.default = md.default.replace(/\(.\/.*md\)/g, (substring: string) => {
        // Example: http://localhost:6006/?path=/info/components-hero--get-read-me-story
        const root = window.top.location.href.split('/?')[0];
        const path = `?path=/info/${COMPONENT_SECTION_NAME.toLowerCase()}`;

        // Get component from link. (./HeroBanner.md) => HeroBanner
        const component = substring.split('/')[1].split('.')[0];
        // Storybook uses dash-limited-syntax in their URL schema.
        const dashed = component.replace(/\.?([A-Z])/g, (x) => `-${x.toLowerCase()}`);
        return `(${root}${path}${dashed}--get-read-me-story)`;
    });
    return md;
};

export const getLeftToRightIconTransform = (): any =>
    getDirection() === 'rtl' ? { transform: 'scaleX(-1)' } : undefined;

export const getBodyFiller = (): JSX.Element => (
    <div style={{ padding: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris
        aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi
        condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum
        eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras
        porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi
        bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id
        tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus
        interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.
    </div>
);
