import React from 'react'
import PropTypes from 'prop-types'
import DataGridHead from './DataGridHead'
import DataGridBody from './DataGridBody'
import DataGridContext from './DataGridContext'
import TableGrid from './DataGrid.styles'

const DataGrid = ({ columns, rows }) => {
  return (
    <DataGridContext.Provider
      value={{
        columns,
        rows,
      }}
    >
      <TableGrid data-testid="data-grid">
        <DataGridHead />
        <DataGridBody />
      </TableGrid>
    </DataGridContext.Provider>
  )
}

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  rows: PropTypes.arrayOf(PropTypes.object),
}

DataGrid.defaultProps = {
  columns: [],
  rows: [],
}

export default DataGrid
