import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ComplexDrawerSubheaderExample } from './ComplexDrawerSubheaderExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Energy Co." />
    <DrawerSubheader divider={false}>
        <FormControl>
            <InputLabel id="organization">Organization</InputLabel>
            <Select
                label="organization"
                labelId="organization"
                value={selected}
                onChange={(event): void => setSelected(event.target.value)}
            >
                <MenuItem value="acme">ACME Co.</MenuItem>
                <MenuItem value="blui">BLUI CO.</MenuItem>
                <Divider />
                <MenuItem>
                    <Typography variant="caption">
                        + Add a New Organization...
                    </Typography>
                </MenuItem>
            </Select>
        </FormControl>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup>
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
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-22" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerSubheader/examples/ComplexDrawerSubheader.tsx"
        />
    </Box>
);
