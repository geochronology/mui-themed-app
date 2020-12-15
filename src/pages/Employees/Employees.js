import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper, TableBody, TableCell, TableRow } from "@material-ui/core";
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Addr (personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department' }
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
