import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import BasicDrawerNavItem from '../../../examples/drawerNavItem/BasicDrawerNavItem';
const JSCode = `const App = props => {
    return (
      <div>
        <h1> Prism JS </h1>
        <div>Awesome Syntax Highlighter</div>
      </div>
    );
  };
  `;
  
  const htmlCode = `
      <div>
        <h1> PrismJS Tutorial </h1>
        <p>
        Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
        </p>
      </div>
  `;
export const DrawerNavItemExamplesComponent = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* <EmptyState icon={<ConstructionIcon fontSize={'inherit'} />} title={'Examples for drawer nav item coming soon'} /> */}
            <BasicDrawerNavItem code={JSCode} language="javascript" />
            <BasicDrawerNavItem code={htmlCode} language="html" />
        </Box>
    );
};
