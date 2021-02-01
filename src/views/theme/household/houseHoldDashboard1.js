import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MaterialTable from 'material-table';
import {Menu,MenuList,MenuButton,MenuItem,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow
} from '@coreui/react'



function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "-30px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",
    padding: "-25px",
    paddingBottom: "10px",
  },
  inforoot: {
    margin: "5px",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="Service 2" {...a11yProps(2)} />
          <Tab label="Service 3" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <CButton 
        color="primary" 
        className="float-right"
      >Add New OVC</CButton>
     <br/><br/>
      <MaterialTable
                title="List of OVC's"
                columns={[
                  { title: 'Name', field: 'name' },
                  { title: 'Address', field: 'surname' },
                  { title: 'Date', field: 'birthYear', type: 'numeric' },
                  {
                    title: 'State',
                    field: 'birthCity',
                    
                  },
                  {
                    title: 'Action',
                    field: 'action',
                    
                  },
                ]}
                data={[
                  { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63, 
                  action:<Menu>
                          <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px"}}>
                              Action <span aria-hidden>▾</span>
                            </MenuButton>
                              <MenuList style={{hover:"#eee"}}>
                              <MenuItem >{" "}Edit</MenuItem>
                              <MenuItem >{" "}Delete</MenuItem>
                              </MenuList>
                          </Menu>},
                  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, action:
                  <Menu>
                  <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px"}}>
                      Action <span aria-hidden>▾</span>
                    </MenuButton>
                      <MenuList style={{hover:"#eee"}}>
                      <MenuItem >{" "}Edit</MenuItem>
                      <MenuItem >{" "}Delete</MenuItem>
                      </MenuList>
                  </Menu>},
                
                ]}        
                options={{
                  search: true
                }}
              />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Household Services
      </TabPanel>
      <TabPanel value={value} index={2}>
        OVC
      </TabPanel>
    </div>
  );
}
