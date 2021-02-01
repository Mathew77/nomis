import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CRow
} from '@coreui/react'

import MaterialTable from 'material-table';
import {Menu,MenuList,MenuButton,MenuItem,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { Link } from 'react-router-dom';



const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const Tables = () => {
  return (
    <>
      
        <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Household Vulnerability Assessment

              <CButton 
                  color="primary" 
                  className="float-right"
                >Add New Household Assessment</CButton>
            </CCardHeader>
            <CCardBody>
            <MaterialTable
                title="Household List"
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
                  action:
                  <Menu>
                          <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px"}}>
                              Action <span aria-hidden>▾</span>
                            </MenuButton>
                              <MenuList style={{hover:"#eee"}}>
                              <MenuItem >
                                <Link
                                      to={{pathname: "/theme/household4"}}>
                                      First View
                                </Link>
                                
                              </MenuItem>
                              <MenuItem >
                                <Link
                                      to={{pathname: "/theme/household2"}}>
                                      Second View
                                </Link>
                              </MenuItem>
                              <MenuItem >
                              <Link
                                      to={{pathname: "/theme/householdview"}}>
                                      Third View
                                </Link>
                              </MenuItem>
                              <MenuItem >{" "}Edit</MenuItem>
                              <MenuItem >{" "}Delete</MenuItem>
                              </MenuList>
                          </Menu>
                  
                  },
                  { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34, 
                  action:<Menu>
                          <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px"}}>
                              Action <span aria-hidden>▾</span>
                            </MenuButton>
                              <MenuList style={{hover:"#eee"}}>
                              <MenuItem >{" "}View</MenuItem>
                              <MenuItem >{" "}Second View</MenuItem>
                              <MenuItem >{" "}Third View</MenuItem>
                              <MenuItem >{" "}Edit</MenuItem>
                              <MenuItem >{" "}Delete</MenuItem>
                              </MenuList>
                          </Menu>
                
                },
                ]}        
                options={{
                  search: true
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
