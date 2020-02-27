import { storiesOf } from '@storybook/react';
import React from 'react';
import { storyWrapper } from '../src/util';

export const stories = storiesOf('Intro/Welcome', module);
stories.addDecorator(storyWrapper);

stories.add('to pxblue', () => <div>Hi, this is the library.</div>);
