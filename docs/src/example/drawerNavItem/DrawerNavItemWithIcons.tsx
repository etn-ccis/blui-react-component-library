import React from "react";
import { Box } from "@mui/material";
import {
  Drawer,
  DrawerBody,
  DrawerNavGroup,
  DrawerNavItem
} from "@brightlayer-ui/react-components";
import Dashboard from "@mui/icons-material/Dashboard";
import Notifications from "@mui/icons-material/Notifications";
import Gavel from "@mui/icons-material/Gavel";
import * as colors from '@brightlayer-ui/colors';

export const DrawerNavItemWithIconsExample = (): JSX.Element => {
  return (
    <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
      <Drawer open={true} width={250} sx={{ margin: "0 auto" }}>
        <DrawerBody sx={{ flex: "1 1 auto" }}>
          <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
            <DrawerNavItem
              title="Locations"
              icon={<Notifications />}
              itemID="2"
            />
            <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
          </DrawerNavGroup>
        </DrawerBody>
      </Drawer>
    </Box>
  );
};
