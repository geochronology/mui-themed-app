import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";
import { Controls } from "../../components/controls/Controls";
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const headCells = [
  { id: 'fullName', label: 'Full Name' },
  { id: 'email', label: 'Email' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department', disableSorting: true }
]

export default function Employees() {

  const classes = useStyles()
  const [records, setRecords] = useState(employeeService.getAllEmployees())

  const {
    TableContainer,
    TableHeader,
    TablePaginationLol,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells)

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design with Validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}

        <Toolbar>
          <Controls.Input
            label="Search Employees"
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}

          />
        </Toolbar>

        <TableContainer>
          <TableHeader />
          <TableBody>

            {
              recordsAfterPagingAndSorting().map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                </TableRow>
              ))
            }

          </TableBody>
        </TableContainer>
        <TablePaginationLol />
      </Paper>
    </>
  )
}
