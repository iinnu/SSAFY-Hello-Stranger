import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import TabPanel from '../Plan/TabPanel';

const CustomTabs = styled(Tabs)`
  &.MuiTabs-root > .MuiTabs-scroller > .MuiTabs-indicator {
    background-color: #7c99c7;
  }
`;

const CustomTab = styled(Tab)`
  &.MuiButtonBase-root {
    font-size: 1.1em;

    & .MuiTouchRipple-root {
      opacity: 0;
    }
  }

  &.Mui-selected {
    font-weight: 900;
    color: #7c99c7;
  }
`;

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function PlanDrawer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <CustomTab label="음식" {...a11yProps(0)} />
          <CustomTab label="활동" {...a11yProps(1)} />
        </CustomTabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
}
