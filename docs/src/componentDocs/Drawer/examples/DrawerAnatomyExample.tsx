import Box from '@mui/material/Box';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const DrawerAnatomyExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
            <DrawerHeader title="Header" />
            <DrawerSubheader>
                <Box sx={{ p: 2 }}>Subheader Content Here</Box>
            </DrawerSubheader>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup hidePadding>
                    <DrawerNavItem title="Item 1" itemID="1" />
                    <DrawerNavItem title="Item 2" itemID="2" />
                    <DrawerNavItem title="Item 3" itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
            <DrawerFooter>
                <Box sx={{ p: 2 }}>Footer Content Here</Box>
            </DrawerFooter>
        </Drawer>
    </Box>
);
