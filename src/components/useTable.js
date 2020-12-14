import { Table } from '@material-ui/core'
import React from 'react'

export default function useTable(records, headCells) {

  const TableContainer = (props) => (
    <Table>
      {props.children}
    </Table>
  )

  return {
    TableContainer
  }
}
