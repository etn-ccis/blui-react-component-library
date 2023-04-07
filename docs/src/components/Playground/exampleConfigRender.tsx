import React from 'react';
import { Playground } from './Playground';
import { ChannelValue } from '@brightlayer-ui/react-components/core/ChannelValue';
import exampleConfig from './exampleConfig';

const exampleConfigRender = (): JSX.Element => <Playground demoComponent={ChannelValue} config={exampleConfig} />;

export default exampleConfigRender;
