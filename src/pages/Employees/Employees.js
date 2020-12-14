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

export default function Employees() {

  const classes = useStyles()
  const [records, setRecords] = useState(employeeService.getAllEmployees())

  const {
    TableContainer
  } = useTable()

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
          <TableBody>

            {
              records.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                </TableRow>
              ))
            }

          </TableBody>
        </TableContainer>
      </Paper>
    </>
  )
}
