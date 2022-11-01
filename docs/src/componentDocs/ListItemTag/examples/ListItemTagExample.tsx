import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import { ExampleShowcase } from '../../../shared';

export const ListItemTagExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <ListItemTag label="Default Tag" />
        <ListItemTag sx={{ ml: 4 }} label="Custom Tag" fontColor="#424e54" backgroundColor="#f0cb2f" />
    </ExampleShowcase>
);
