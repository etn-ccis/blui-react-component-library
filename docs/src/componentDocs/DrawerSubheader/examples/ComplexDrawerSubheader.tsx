import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { ComplexDrawerSubheaderExample } from './ComplexDrawerSubheaderExample';

const codeSnippet = `<Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout openOnHover={false}>
    <DrawerHeader title="Energy Co." />
    <DrawerSubheader>
        <FormControl sx={{ height: 56, width: '100%', mt: 1 }}>
            <InputLabel id="organization">Organization</InputLabel>
            <Select
                labelId="organization"
                value={selected}
                onChange={(event): void => setSelected(event.target.value)}
            >
                <MenuItem value="acme">ACME Co.</MenuItem>
                <MenuItem value="blui">BLUI CO.</MenuItem>
                <Divider />
                <MenuItem value="addnew">
                    <Typography variant="caption" sx={{ fontSize: '1rem' }}>
                        + Add a New Organization...
                    </Typography>
                </MenuItem>
            </Select>
        </FormControl>
    </DrawerSubheader>
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
            <DrawerNavItem title="Locations" icon={<LocationOn />} itemID="2" />
            <DrawerNavItem title="Legal" icon={<Copyright />} itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const ComplexDrawerSubheader = (): JSX.Element => (
    <Box>
        <ComplexDrawerSubheaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerSubheader/examples/ComplexDrawerSubheader.tsx" />
        </Box>
    </Box>
);
