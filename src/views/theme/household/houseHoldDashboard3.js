import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import MaterialTable from 'material-table';
import {Menu,MenuList,MenuButton,MenuItem,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow,
  CLabel,
  CFormGroup,
  CSelect
} from '@coreui/react'

import { DocsLink } from 'src/reusable'





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
     
      
      <CRow>
        <CCol xs="12" md="3">
          <CCard>
            <CCardHeader>
              
            </CCardHeader>
            <CCardBody>
            
            <CFormGroup>
                    <CLabel htmlFor="ccmonth">Services</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      
                    </CSelect>
                  </CFormGroup>
            
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
              List of Services
            </CCardHeader>
            <CCardBody>
            <MaterialTable
                title="Services"
                columns={[
                  { title: 'Name', field: 'name' },
                  
                  { title: 'Date', field: 'birthYear', type: 'numeric' },
                 
                  {
                    title: 'Action',
                    field: 'action',
                    
                  },
                ]}
                data={[
                  { name: 'Mehmet',birthYear: 2021, 
                  action:<Menu>
                          <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px"}}>
                              Action <span aria-hidden>▾</span>
                            </MenuButton>
                              <MenuList style={{hover:"#eee"}}>
                             
                              <MenuItem >{" "}Edit</MenuItem>
                              <MenuItem >{" "}Delete</MenuItem>
                              </MenuList>
                          </Menu>},
                  { name: 'Zerya Betül',  birthYear: 2017,  action:
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
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="5">
          <CCard>
            <CCardHeader>
              List of OVC's
            </CCardHeader>
            <CCardBody>
            <MaterialTable
               title="OVC's"
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
                      <MenuItem >{" "}Services</MenuItem>
                      </MenuList>
                  </Menu>},
                
                ]}        
                options={{
                  search: true
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
