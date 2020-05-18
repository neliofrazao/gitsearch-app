import React, { useContext } from 'react'
import { TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import DataGridContext from '../DataGridContext'

const DataGridHead = () => {
  const { columns } = useContext(DataGridContext)

  return (
    <TableHead>
      <TableRow data-testid="data-grid-table-head">
        {columns.map((column) => (
          <TableCell key={column.id}>
            <Typography variant="body1">{column.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default DataGridHead
