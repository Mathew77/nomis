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






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: "-30px",
  },
  header: {
    fontSize: "20px",
    fontWeight: "bold",

    paddingBottom: "10px",
  },
  inforoot: {
    margin: "5px",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);



  return (
    <div >
      <CButton 
        color="primary" 
        className="float-right"
      >Add New OVC</CButton>
     <br/><br/>
     
      <MaterialTable
                title="List of OVC"
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
                              <MenuItem >{" "}Service</MenuItem>
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
                      <MenuItem >{" "}Services</MenuItem>
                      </MenuList>
                  </Menu>},
                
                ]}        
                options={{
                  search: true
                }}
              />
      
    </div>
  );
}
