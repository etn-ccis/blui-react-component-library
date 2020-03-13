import { GradeA } from '@pxblue/icons-mui';
import { Hero } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {WITH_MIN_PROPS_STORY_NAME} from "../../src/constants";

export const withBasicUsage = (): StoryFnReactReturnType => (
    <Hero icon={<GradeA fontSize={'inherit'} />} label={text('label', 'Efficiency')} />
);

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
