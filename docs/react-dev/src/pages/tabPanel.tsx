import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ListItemTagComponent } from './ListItemTagComponent';
import { ListItemTagComponentDoc } from './ListItemTagComponentDoc';
import TemporaryDrawer from '../pages/temporaryDrawer';
import * as colors from '@brightlayer-ui/colors';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const PreviewContainerStyles = {
    width: '75%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    p: 0,
    overflow: 'auto',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered sx={{ width: value === 2 ? '75%' : '100%', bgcolor:colors.blue[200] }}>
          <Tab sx={{ width: '33%' }} label="Examples" {...a11yProps(0)} disabled />
          <Tab sx={{ width: '33%' }} label="API Ground" {...a11yProps(1)} />
          <Tab sx={{ width: '33%' }} label="Playground" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={PreviewContainerStyles}>
            
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListItemTagComponentDoc/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={PreviewContainerStyles}>
            <ListItemTagComponent />
            <TemporaryDrawer />
        </Box>
        
      </TabPanel>
    </Box>
  );
}