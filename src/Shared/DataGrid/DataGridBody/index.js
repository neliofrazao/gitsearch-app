import React, { useContext } from 'react'
import { TableCell, TableBody, TableRow, Typography } from '@material-ui/core'
import DataGridContext from '../DataGridContext'

const DataGridBody = () => {
  const { columns, rows } = useContext(DataGridContext)

  return (
    <TableBody data-testid="data-grid-table-body">
      {rows.map((row) => (
        <TableRow key={row.id} data-testid={`data-grid-body-table-row-${row.id}`}>
          {columns.map(({ id }) => (
            <TableCell key={id}>
              <Typography variant="body1">{row[id]}</Typography>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default DataGridBody
